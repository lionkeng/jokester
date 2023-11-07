import { PromptTemplate } from 'langchain/prompts'
import { ChatOpenAI } from 'langchain/chat_models/openai'

async function main(): Promise<void> {
  const model = new ChatOpenAI({ temperature: 0.7 })
  const promptTemplate = PromptTemplate.fromTemplate(
    'You are a jokester great at telling dad jokes. Tell me a joke about {topic}'
  )

  const chain = promptTemplate.pipe(model)

  const result = await chain.invoke({ topic: 'banana' })

  console.log(result.content)
}

main()

/*
  AIMessage {
    content: "Why don't bears wear shoes?\n\nBecause they have bear feet!",
  }
*/
