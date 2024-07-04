# Question Paper Generator

This is a Question Paper Generator application built with Node.js. The application stores a collection of questions and generates a question paper based on the specified total marks and difficulty distribution.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd question-paper-generator


### Install dependencies:
npm install


### Start the server:
npm start


 ### Generate a question paper:
 1. Make a POST request to /generate-paper with the desired total marks and difficulty distribution.
 2. Payload {
    "totalMarks": 100,
    "difficultyDistribution": {
        "easy": 20,
        "medium": 50,
        "hard": 30
    }
}

### API Endpoints
1. Get All Questions
URL: /questions
Method: GET
Description: Retrieves all questions from the question store.

2. URL: /generate-paper
Method: POST
Description: Generates a question paper based on the total marks and difficulty distribution provided in the request body.


### Request Body:
{
    "totalMarks": 100,
    "difficultyDistribution": {
        "easy": 20,
        "medium": 50,
        "hard": 30
    }
}
