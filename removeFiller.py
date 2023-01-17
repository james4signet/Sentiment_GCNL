# use NLTK library to filter out filler words BEFORE sending the text to the Google Cloud Natural Language API.

import nltk
from nltk.corpus import stopwords

# Download the NLTK stopwords
nltk.download('stopwords')

# Define a list of filler words to exclude
stop_words = set(stopwords.words('english'))

# Function to remove filler words from text
def remove_stopwords(text):
    # Split the text into words
    words = text.split()

    # Filter out the filler words
    filtered_words = [word for word in words if word.lower() not in stop_words]

    # Join the filtered words back into a single string
    filtered_text = " ".join(filtered_words)

    return filtered_text

# Get the text from the website
response = requests.get(url)
text = response.text

# Remove filler words from the text
filtered_text = remove_stopwords(text)

# Create a document object with the filtered text
document = types.Document(
    content=filtered_text,
    type=enums.Document.Type.PLAIN_TEXT
)

# Use the client to analyze the filtered text
entities = client.analyze_entities(document).entities
phrases = client.analyze_syntax(document).tokens

# rest of the code remains same as before
