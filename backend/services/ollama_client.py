import ollama
import json

def generate_quiz(topic, level):
    prompt = f"Generate 2 MCQs with 4 options and correct answers on the topic '{topic}' for a {level} level student. Format as strictly JSON list only."
    res = ollama.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': prompt}],
        stream=True
    )

    full_response = ""
    for chunk in res:
        content = chunk["message"]["content"]
        print(content)
        full_response += content

    # Optional: Print for debugging
    # print(full_response)

    try:
        quiz_json = json.loads(full_response)
        return quiz_json
    except json.JSONDecodeError:
        # If parsing fails, return as-is or log the error
        return {"error": "Invalid JSON response", "raw": full_response}

# def generate_quiz(topic, level):
#     prompt = f"Generate 2 MCQs with 4 options and correct answers on the topic '{topic}' for a {level} level student. Format as strictly JSON list only."
#     res = ollama.chat(
#         model='llama3.2',
#         messages=[{'role': 'user', 'content': prompt}],
#         stream=True
#     )
#     # print(res)
#     for chunk in res:
#         print(chunk["message"]["content"], end="", flush=True)
#     return res['message']['content']

def ask_question(question,savequestion):
    res = ollama.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': f"this is my question :{savequestion}  now answer this clearly  why {question}"}]
    )
    return res['message']['content']
