export const ItemOpenAiKey = () => {
  return (
    <div className="ItemOpenAiKey">
        OpenAI API key&nbsp;
        <input
          id='llm-key'
          style={{width: '200px'}}
          type='password'
        />
    </div>
  );
}