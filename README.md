# Introducing Concept Viewer 🚀

A visual tool to explore semantic connections between textual concepts.

![alt text](image.png)

## Instructions

```shell
# Clone the code
git clone https://github.com/tmarti/concept-viewer

# Install dependencies
yarn

# Run the local server
yarn dev
```

Now you can navigate to http://localhost:5173/

## User manual

1. Enter your OpenAI API key in the input field on the top (only used for calls to the OpenAI embedding's API)

2. On the dropdown, select a category. This will pre-populate a list of concepts related to the category. Now, press "Represent Category". This will generate thr initial category representation.

3. Finally, under "Your Concept" enter the concept you want explore and press "Represent Concept". You'll be able to inspect visually to which concept of thr category it lies semantically closer.

## How it works

When the category is represented, the sentence embeddings for its concepts are generated. Then, those embeddings are projected into the 3d-space using UMAP. The UMAP projection is then saved and reused to represent "your concept", so that the 3d space for both the category and the concept has the same "semantic coordinate system".
