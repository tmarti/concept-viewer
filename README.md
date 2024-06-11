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

## Usage

1. Enter your OpenAI API key in the input field on the top (only used for calls to the OpenAI embedding's API)

2. On the dropdown, select a category. This will pre-populate a list of concepts related to the category. For each concept in the category, a box will appear in the 3D area.

3. Finally, under "Your Concept" enter the concept you want explore and press enter. You'll be able to inspect visually to which concept of the category it lies semantically closer. The black ball will be placed in the 3D corresponding to your concept, and the semantically top-3 closest concepts will be informed.

## How it works

When the category is represented, the sentence embeddings for its concepts are generated. Then, those embeddings are projected into the 3d-space using UMAP. The UMAP projection is then saved and reused to represent "your concept", so that the 3d space for both the category and the concept has the same "semantic coordinate system". In addition, in order to find the top-3 semantically closest concepts, the ones with the minimum diatance in tgr 3d space to the 3d position of "your concept" are picked. It would be also possible to base the distance function in the emebedding space instead of 3d space, but thr 3d space eas chosen for simplicity and because it also matches the 3d representation.

## If you try it and like it

Thanks! And please consider giving a ⭐ to the repo, it will be appreciated :)
