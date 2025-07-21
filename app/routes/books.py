from fastapi import APIRouter
import json
from pathlib import Path
from app.services.tour_api import search_tourapi_by_keyword

router = APIRouter()

BOOK_DB_PATH = Path(__file__).parent.parent / "data" / "book_location_event.json"

@router.get("/search-book")
def search_by_book(title: str):
    with open(BOOK_DB_PATH, "r", encoding="utf-8") as f:
        book_map = json.load(f)

    location_info_list = book_map.get(title)
    if not location_info_list:
        return {"message": f"'{title}'에 대한 장소 정보가 등록되어 있지 않습니다."}

    results = []
    for item in location_info_list:
        location = item.get("location")
        event = item.get("event")

        api_result = search_tourapi_by_keyword(location)
        items = api_result.get("response", {}).get("body", {}).get("items", {}).get("item", [])

        results.append({
            "location": location,
            "event": event,
            "tourapi_results": items
        })

    return {
        "book": title,
        "locations": results
    }
