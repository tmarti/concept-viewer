export const ItemOpenAiKey = () => {
  return (
    <div className="ItemOpenAiKey">
        OpenAI API key&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          id='llm-key'
          style={{width: 'auto'}}
          type='password'
        />
    </div>
  );
}