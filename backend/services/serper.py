import requests
import json

url = "https://google.serper.dev/images"

def courses(person):
    payload = json.dumps({
    "q": "apple inc",
    "gl": "in"
    })
    headers = {
    'X-API-KEY': '3d70037d6b7ca654ffaaf0374eb56caacdb52c68',
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)