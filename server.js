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
            content:
              "You are ChatGPT, a large language model trained by OpenAI.",
          },
          { role: "user", content: "Generate me a twitter post for the topic: Bitcoin. Also Include hashtag and Emojis. Number of words should be less than 40 words" },
        ],
    });
    const result = response.data.choices[0].message.content;
    console.log(result)
    if(result){
      const client = new TwitterApi({
        appKey: process.env.API_KEY,
        appSecret: process.env.API_SECRET,
        accessToken: process.env.ACCESS_TOKEN,
        accessSecret: process.env.ACCESS_TOKEN_SECRET,
      });
  
      const twitterClient = client.readWrite;
  
      const tweet = async () => {
        try {
          await twitterClient.v2.tweet(result);
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
