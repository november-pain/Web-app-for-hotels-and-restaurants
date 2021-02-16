import json


def parse_json(jason):
    items = json.loads(jason)
    new_items = []
    for item in items:
        item["fields"]["id"] = item["pk"]
        new_item = item["fields"]
        new_items.append(new_item)
    new_json = json.dumps(new_items)
    return new_json
