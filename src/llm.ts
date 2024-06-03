import OpenAI from "openai";
import { UMAP } from "umap-js";

export default class EmbeddingModel {
    private openai?: OpenAI = undefined;
    private theUMAP?: UMAP = undefined;

    private initOpenAi()
    {
        const llmKey = (document.getElementById('llm-key') as HTMLInputElement).value;
    
        if (llmKey == '') {
            alert("You need to provide an OpenAI API key");
            throw "You need to provide an OpenAI API key";
        }
    
        if (this.openai) {
            return;
        }
    
        this.openai = new OpenAI({
            // baseURL: 'http://localhost:3000/aiAPI/',
            apiKey: llmKey,
            dangerouslyAllowBrowser: true,
        });
    }

    private async calculateEmbedding(text:string) {
        if (!this.openai) {
            return [] as number[];
        }
    
        const response = await this.openai.embeddings.create({
            model: "text-embedding-3-large",
            input: text,
        });
    
        return response.data[0].embedding;
    }
    
    public async initializeProjection(texts: string[]) {
        this.initOpenAi();
    
        const embeddings = await Promise.all(
            texts.map(x => this.calculateEmbedding(x))
        );
    
        this.theUMAP = new UMAP({
            nNeighbors: 1,
            nComponents: 3,
            minDist: 0.5,
        });
      
        return this.theUMAP.fit(embeddings);
    }

    public async calculateProjection(text: string) {
        this.initOpenAi();
    
        if (!this.theUMAP) {
            return [ 0, 0, 0];
        }
    
        const embedding = await this.calculateEmbedding(text);
    
        const position = this.theUMAP.transform([
            embedding
        ])[0];
    
        return position;
    }
};