import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import { TwitterApi } from "twitter-api-v2";
import axios from "axios";
import cron from "node-cron";
import Reddit from "reddit";
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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE1,
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
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE2,
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
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

async function twitter1() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE3,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY2,
        appSecret: process.env.API_SECRET2,
        accessToken: process.env.ACCESS_TOKEN2,
        accessSecret: process.env.ACCESS_TOKEN_SECRET2,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

async function twitter2() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE4,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY3,
        appSecret: process.env.API_SECRET3,
        accessToken: process.env.ACCESS_TOKEN3,
        accessSecret: process.env.ACCESS_TOKEN_SECRET3,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

async function twitter3() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE5,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY4,
        appSecret: process.env.API_SECRET4,
        accessToken: process.env.ACCESS_TOKEN4,
        accessSecret: process.env.ACCESS_TOKEN_SECRET4,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

async function twitter4() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer concisely",
        },
        {
          role: "user",
          content: process.env.TWITTER_TITLE6,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const client = new TwitterApi({
        appKey: process.env.API_KEY5,
        appSecret: process.env.API_SECRET5,
        accessToken: process.env.ACCESS_TOKEN5,
        accessSecret: process.env.ACCESS_TOKEN_SECRET5,
      });

      const twitterClient = client.readWrite;

      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result + " #glocomx #nfts #blockchain");
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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content: process.env.LINKEDIN_TITLE1,
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

async function linkedinCompany() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content: process.env.LINKEDIN_TITLE2,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const postData = {
        author: `urn:li:organization:76458953`,
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
            Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN1}`,
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

async function linkedin1() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content: process.env.LINKEDIN_TITLE3,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const postData = {
        author: `urn:li:person:${process.env.PERSON_ID2}`,
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
            Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN2}`,
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

async function linkedin2() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content: process.env.LINKEDIN_TITLE4,
        },
      ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result);
    if (result) {
      const postData = {
        author: `urn:li:person:${process.env.PERSON_ID3}`,
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
            Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN3}`,
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

async function reddit() {
  const reddit = new Reddit({
    username: process.env.reddit_username,
    password: process.env.reddit_password,
    appId: process.env.reddit_app_id,
    appSecret: process.env.reddit_app_secret,
    userAgent: "MyApp/1.0.0 (http://example.com)",
  });

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
      },
      {
        role: "user",
        content: process.env.reddit_prompt,
      },
    ],
  });
  const result = response.data.choices[0].message.content;
  console.log(result);
  if (result) {
    try {
      const res = await reddit.post("/api/submit", {
        sr: "Glocomx",
        kind: "self",
        resubmit: true,
        title: process.env.reddit_title,
        text: result,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

async function facebook() {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        {
          role: "user",
          content: `${process.env.facebook_post_title}`,
        },
      ],
    });
    const result = response.data.choices[0].message.content;

    if (result) {
      axios
        .post(
          `https://graph.facebook.com/${process.env.facebook_page_id}/feed?access_token=${process.env.facebook_access_token}`,
          {
            message: result,
          }
        )
        .then((response) => {
          console.log("Posted on Facebook successfully", response.data);
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    }


    // const url = "https://api.openai.com/v1/images/generations";
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    // };

    // const data = {
    //   prompt: `${process.env.facebook_image_title}`,
    //   n: 1,
    //   size: "512x512",
    // };

    // axios
    //   .post(url, data, { headers })
    //   .then((response) => {
    //     const imgOutput = response.data.data[0].url;

    //     if (result && imgOutput) {
    //       axios
    //         .post(
    //           `https://graph.facebook.com/${process.env.facebook_page_id}/photos?access_token=${process.env.facebook_access_token}`,
    //           {
    //             url: imgOutput,
    //             caption: result,
    //           }
    //         )
    //         .then((response) => {
    //           console.log("Posted on Facebook successfully", response.data);
    //         })
    //         .catch((error) => {
    //           console.error(error.response.data);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  } catch (error) {
    console.error(error);
  }
}

cron.schedule("*/30 * * * *", () => {
  facebook();
});

cron.schedule("*/60 * * * *", () => {
  twitter();
  twitterCompany();
  twitter1();
  twitter2();
  twitter3();
  twitter4();
});

cron.schedule("0 */4 * * *", () => {
  linkedin();
  linkedinCompany();
  linkedin1();
  linkedin2();
  reddit();
});

app.listen(5000, () =>
  console.log("AI server started on http://localhost:5000")
);
