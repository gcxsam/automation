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
          content: "You are ChatGPT, a large language model trained by OpenAI.",
        },
        // { role: "user", content: "Write a very short tweet with no more than 30 words for the this description: Our platform will offer fractional ownership in high-value real estate properties through the issuance of NFTs. The NFTs will represent a portion of the property's value and will be tradable on our platform. Investors can purchase these NFTs using our utility tokens, which will be ERC-20 compliant and built on the Ethereum blockchain. The utility tokens will provide investors with access to the platform's services and functionalities, including purchasing, trading, and managing their NFT investments. The platform will generate revenue by charging a transaction fee for each NFT purchase or sale. Posts should provoke engagement, and Add human tales the personal element that engenders trust. Also Include hashtag and Emojis. Number of words should be less than 30 words" },
        {
          role: "user",
          content:"Generate random fix 20 words tweet using the following text: @glocomx is platform that offers fractional ownership in high-value real estate properties through the issuance of NFTs. The platform is built on the Ethereum blockchain and uses utility tokens that provide investors with access to the platform's services and functionalities. Transactions on the platform are transparent, secure, and efficient due to the use of blockchain technology. The platform is governed by a hybrid DAO that follows a constitution defining the roles and responsibilities of the founder, board of directors, and members, as well as the governance mechanisms for decision-making processes, amendments, and dissolution. Members can submit proposals, vote on proposals, and participate in discussions and decision-making processes through a user-friendly interface. The board of directors reviews proposals and puts them to a vote if they meet the criteria for consideration. The DAO can be dissolved by a two-thirds majority vote of the members, and any remaining assets should be distributed to a non-profit organization promoting fair trade and social responsibility. posts should provoke engagement, human tales and personal element that engenders trust. Include emojis where necessary and word count should be less than 30 words."
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
          await twitterClient.v2.tweet(result+"#glocomx #nfts #blockchain");
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

cron.schedule("*/5 * * * *", () => {
  twitter();
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
