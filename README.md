# Sentiment_GCNL
Sentiment using Google Cloud Natural Language API.

## About this Project
The project would be for a company or organization that wants to analyze their competitors or industry websites to understand the topics, sentiments, and trends that are being discussed in their field. By inputting a URL of a website and extracting the keywords, key phrases, categories, subcategories and sentiment score, the company can gain a better understanding of the content on the website, and use that information to inform their own content marketing strategy, product development, or customer service strategy. This project can be used as a tool for competitive analysis and market research, providing valuable insights to help organizations make data-driven decisions.

## Description

This project is a web application that allows users to input a URL of a website and extract and classify the keywords, key phrases, categories, subcategories and sentiment score of the text on the website. The classification is done against predefined categories and subcategories that are supplied via a CSV file. The application uses the Google Cloud Natural Language API to extract and analyze the text, and it is developed using Python, JavaScript, HTML, and CSS. The output is displayed to the user in a table format on the browser. The web server is set up using Google Cloud Platform, and the project is designed to be affordable, scalable, and easy to maintain.

## Instructions

1. Create a project on Google Cloud Platform and enable the Natural Language API.
1. Create a service account and generate a key for the project.
1. Download the key and set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of the key.
1. Create a virtual environment and install the required dependencies such as google-cloud-language, pandas
1. Upload HTML file that provides the user interface for inputting the URL and displaying the output.
1. Upload the JavaScript file that handles the form submission and communicates with the back-end.
1. Upload the CSS file that styles the HTML form and table.
1. Install a web server such as Apache or Nginx on your server.
1. Configure your web server to handle the form submission and route it to the appropriate script.
1. Deploy the HTML, JavaScript and CSS files on the web server.
1. Run the Python script on the server.
1. Test the project by accessing it through a web browser.


## Web Server Recommendations

Google App Engine: This is a fully managed platform for building and deploying web applications. You can use App Engine to deploy your HTML, JavaScript, and CSS files and run your Python script. App Engine also provides automatic scaling, monitoring, and logging, making it easy to maintain your web server.

---

## Requirements for Project


* Python Proess script: This script will handle the extraction, classification and sentiment analysis of the website's text.

* An HTML form file: This file will provide the user interface for inputting the URL and displaying the output.

* JavaScript file: This file will handle the form submission and the communication between the front-end and the back-end. It will also handle the parsing of the JSON response from the server and updating the HTML table.

* CSS file: This file will handle the styling of the HTML form and table.

* (Optional) A CSV file : this file will contain the predefined categories and subcategories against which the classification is done.

* A web server: This is required to run the project, you can use any web server that you are comfortable with, such as Apache, Nginx, etc.

* Any dependencies file or a virtual environment : You need to have the required dependencies installed to run the python script, such as the Google Cloud Natural Language API client library.

* A google cloud platform account with the Natural Language API activated.
