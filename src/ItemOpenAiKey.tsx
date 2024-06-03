export const ItemOpenAiKey = () => {
  return (
    <div style={{ padding: '3px', textAlign: 'left' }}>
        OpenAI API key&nbsp;
        <input
          id='llm-key'
          style={{width: '400px'}}
          type='password'
        />
    </div>
  );
}