## Authorization for RAG with Okta FGA

Authorization for RAG ensure that users can only access documents they are permitted to view. By enforcing strict access controls during the document retrieval process, it prevents unauthorized data exposure and maintains data security. For more information, refer to the [documentation](https://demo.auth0.ai/docs/authorization-for-rag).

### How It Works

1. **User Query**: A user submits a query requiring information retrieval.
2. **Document Retrieval**: The system employs a retriever to search its vector store for documents relevant to the query.
3. **Authorization Check**: Auth0 FGA verifies the user's permissions, filtering out any documents the user is not authorized to access.
4. **Response Generation**: Based on the authorized documents, the system generates a response tailored to the user's access level.

### Diagram

Below is a high-level workflow:

<p align="center">
    <img style="margin-left: auto; margin-right: auto;" height="700px" src="https://images.ctfassets.net/23aumh6u8s0i/76DegvQtjEx5jNDcqvy1VD/462977639c07dd1d92e82783d66aac7e/rag-with-fga-flow.png" />
<p>

### Examples

Explore the following examples demonstrating the integration of **Okta FGA** with **LangChain**, **LlamaIndex**, and **Genkit**:

- **LangChain with FGARetriever:**  
  An implementation showcasing how to wrap a LangChain retriever with FGARetriever to enforce authorization checks during document retrieval.  
  [View Example](/examples/authorization-for-rag/langchain/)

- **LlamaIndex with FGARetriever:**  
  A sample application illustrating the use of FGARetriever with LlamaIndex to ensure users can only access permitted documents.  
  [View Example](/examples/authorization-for-rag/llamaindex/)

- **Genkit with FGAReranker:**  
  A sample application demonstrating the use of FGAReranker with Genkit, emphasizing re-ranking of results to prioritize authorized content for users.  
  [View Example](/examples/authorization-for-rag/genkit/)
