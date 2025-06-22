# Flask Starter Template

A minimal Flask starter template for quickly bootstrapping new Flask applications.

## Features

- Minimal, easy-to-understand code structure
- Ready-to-use `app.py` to get started right away
- `requirements.txt` for easy dependency installation
- Example route for a quick test

## Getting Started

### Prerequisites

- Python 3.10+
- [pip](https://pip.pypa.io/)

### Installation

1. **Clone the repository (if not already):**
    ```bash
    git clone https://github.com/mkeithX/mkeithx.github.io.git
    cd mkeithx.github.io/examples/flask-starter-template
    ```

2. **Create a virtual environment (optional but recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

### Running the App

```bash
python app.py
```

The app will be running at [http://localhost:5000](http://localhost:5000).

### Example Output

When you visit [http://localhost:5000](http://localhost:5000), you should see:

```
Hello, Flask!
```

## Project Structure

```
flask-starter-template/
├── app.py
├── requirements.txt
└── README.md
```

- `app.py` - Main Flask application file
- `requirements.txt` - List of Python dependencies
- `README.md` - This file

## Customization

- Add new routes in `app.py` as needed
- Update `requirements.txt` if you add more dependencies

## License

This template is available under the [MIT License](https://opensource.org/licenses/MIT).