import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import { TwitterApi } from "twitter-api-v2";
import axios from "axios";
import cron from "node-cron";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello",
  });
});

async function twitter() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: " Generate me a twitter post for the topic: Bitcoin. Also Include hashtag and Emojis. Number of words should be between 20 - 40 words",
    //   temperature: 0,
    //   max_tokens: 2048,
    //   top_p: 1,
    //   frequency_penalty: 0.5,
    //   presence_penalty: 0,
    // });
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        // { role: "user", content: "Write a very short tweet with no more than 30 words for the this description: Our platform will offer fractional ownership in high-value real estate properties through the issuance of NFTs. The NFTs will represent a portion of the property's value and will be tradable on our platform. Investors can purchase these NFTs using our utility tokens, which will be ERC-20 compliant and built on the Ethereum blockchain. The utility tokens will provide investors with access to the platform's services and functionalities, including purchasing, trading, and managing their NFT investments. The platform will generate revenue by charging a transaction fee for each NFT purchase or sale. Posts should provoke engagement, and Add human tales the personal element that engenders trust. Also Include hashtag and Emojis. Number of words should be less than 30 words" },
        // {
        //   role: "user",
        //   content:"Generate a tweet less than 35 words using the following description :Looking to invest in real estate? Look no further than @glocomx! Our platform leverages blockchain technology and NFTs to offer secure and transparent investments, making real estate investment more accessible than ever before. We also act as a global regulatory enabler, ensuring compliance with applicable laws and regulations across various jurisdictions. GloComX is not just for the wealthy few - anyone looking to diversify their portfolio can benefit from our platform. Developers can easily raise capital for their projects by accessing investors from all over the world. Investors can diversify their portfolios and access a new asset class. Regulators can ensure that investments are made in line with laws and regulations. Our platform allows investors to purchase a fraction of a property, such as a unit in an apartment complex, by purchasing a security token in the form of an NFT. The platform employs utility tokens to purchase the security tokens and offers third-party financial services such as lending and insurance to ensure a seamless end-to-end fractional real estate transaction. Join the revolution in real estate investment with GloComX! Posts should provoke engagement, human tales and personal element that engenders trust. Note: Include relevant emojis where necessary and you should generate content whose word count should be less than 35 words."
        // },
        {
          role: "user",
          content:
            "Discus GloComX Fractional Real Estate using NFTs as security and utility token to purchase the security tokens. You need a Metamask wallet To Participate in GloComX marketplace. Outlines requirements for investors to receive dividends or returns on investment, including timely and accurate payments, visible payment details, and a straightforward withdrawal or reinvestment process. Tweet should be less than 35 words. insert source link, add hashtag and emojis. tweet should provoke engagement, human tales and personal element that engenders trust.",
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY,
        appSecret: process.env.API_SECRET,
        accessToken: process.env.ACCESS_TOKEN,
        accessSecret: process.env.ACCESS_TOKEN_SECRET,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + "#glocomx #nfts #blockchain");
        } catch (e) {
          console.log(e);
        }
      };

      tweet();
    }
  } catch (error) {
    console.error(error);
  }
}

async function twitterCompany() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: " Generate me a twitter post for the topic: Bitcoin. Also Include hashtag and Emojis. Number of words should be between 20 - 40 words",
    //   temperature: 0,
    //   max_tokens: 2048,
    //   top_p: 1,
    //   frequency_penalty: 0.5,
    //   presence_penalty: 0,
    // });
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        // { role: "user", content: "Write a very short tweet with no more than 30 words for the this description: Our platform will offer fractional ownership in high-value real estate properties through the issuance of NFTs. The NFTs will represent a portion of the property's value and will be tradable on our platform. Investors can purchase these NFTs using our utility tokens, which will be ERC-20 compliant and built on the Ethereum blockchain. The utility tokens will provide investors with access to the platform's services and functionalities, including purchasing, trading, and managing their NFT investments. The platform will generate revenue by charging a transaction fee for each NFT purchase or sale. Posts should provoke engagement, and Add human tales the personal element that engenders trust. Also Include hashtag and Emojis. Number of words should be less than 30 words" },
        // {
        //   role: "user",
        //   content:"Generate a tweet less than 35 words using the following description :Looking to invest in real estate? Look no further than @glocomx! Our platform leverages blockchain technology and NFTs to offer secure and transparent investments, making real estate investment more accessible than ever before. We also act as a global regulatory enabler, ensuring compliance with applicable laws and regulations across various jurisdictions. GloComX is not just for the wealthy few - anyone looking to diversify their portfolio can benefit from our platform. Developers can easily raise capital for their projects by accessing investors from all over the world. Investors can diversify their portfolios and access a new asset class. Regulators can ensure that investments are made in line with laws and regulations. Our platform allows investors to purchase a fraction of a property, such as a unit in an apartment complex, by purchasing a security token in the form of an NFT. The platform employs utility tokens to purchase the security tokens and offers third-party financial services such as lending and insurance to ensure a seamless end-to-end fractional real estate transaction. Join the revolution in real estate investment with GloComX! Posts should provoke engagement, human tales and personal element that engenders trust. Note: Include relevant emojis where necessary and you should generate content whose word count should be less than 35 words."
        // },
        {
          role: "user",
          content:
            "Discus GloComX Fractional Real Estate using NFTs as security and utility token to purchase the security tokens. You need a Metamask wallet To Participate in GloComX marketplace. Outlines requirements for investors to receive dividends or returns on investment, including timely and accurate payments, visible payment details, and a straightforward withdrawal or reinvestment process. Tweet should be less than 35 words. insert source link, add hashtag and emojis. tweet should provoke engagement, human tales and personal element that engenders trust.",
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY1,
        appSecret: process.env.API_SECRET1,
        accessToken: process.env.ACCESS_TOKEN1,
        accessSecret: process.env.ACCESS_TOKEN_SECRET1,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + "#glocomx #nfts #blockchain");
        } catch (e) {
          console.log(e);
        }
      };

      tweet();
    }
  } catch (error) {
    console.error(error);
  }
}

async function linkedin() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: " Generate me a twitter post for the topic: Bitcoin. Also Include hashtag and Emojis. Number of words should be between 20 - 40 words",
    //   temperature: 0,
    //   max_tokens: 2048,
    //   top_p: 1,
    //   frequency_penalty: 0.5,
    //   presence_penalty: 0,
    // });
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content:
            "Discus GloComX Fractional Real Estate using NFTs as security and utility token to purchase the security tokens. You need a Metamask wallet To Participate in GloComX marketplace. Outlines requirements for investors to receive dividends or returns on investment, including timely and accurate payments, visible payment details, and a straightforward withdrawal or reinvestment process. Post should be less than 200 words. insert source link, add hashtag and emojis. tweet should provoke engagement, human tales and personal element that engenders trust.",
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const postData = {
        author: `urn:li:person:${process.env.PERSON_ID}`,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: result,
            },
            shareMediaCategory: "NONE",
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      };

      axios
        .post("https://api.linkedin.com/v2/ugcPosts", postData, {
          headers: {
            Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
            "X-Restli-Protocol-Version": "2.0.0",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    }
  } catch (error) {
    console.error(error);
  }
}

cron.schedule("*/20 * * * *", () => {
  twitter();
  twitterCompany()
});

cron.schedule("*/120 * * * *", () => {
  linkedin();
});

app.post("/linkedin", async (req, res) => {
  const postData = {
    author: `urn:li:person:${process.env.PERSON_ID}`,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: req.body.prompt,
        },
        shareMediaCategory: "NONE",
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  axios
    .post("https://api.linkedin.com/v2/ugcPosts", postData, {
      headers: {
        Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
});

app.listen(5000, () =>
  console.log("AI server started on http://localhost:5000")
);
