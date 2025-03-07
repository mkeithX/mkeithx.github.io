import pytest
from main import main

def test_greet():
    assert main.greet("World") == "Hello, World!"
