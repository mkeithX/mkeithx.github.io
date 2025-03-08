import pytest
from datetime import datetime
from utils.helper import greet, date


@pytest.fixture
def current_datetime():
    return datetime(2025, 3, 8)

def test_set_date_time(current_datetime):
    assert current_datetime == datetime(
        2025, 3, 8
    ), "Should return 2025-03-08"

def test_current_date_time():
    result = datetime.strptime(date(), "%m-%d-%Y")
    assert isinstance(result, datetime), "Function should return datetime object."

def test_greet():
    assert greet("World") == "Hello, World!"
