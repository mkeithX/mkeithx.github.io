# Diagrams

Create diagrams using `mermaid` and `geojson`

## Mermaid

### Graph Diagram (Flowchart):

```mermaid
graph TD;
    A[Start] --> B[Step 1];
    A --> C[Step 2];
    B --> D[Step 3];
    C --> D;
```

### Entity-Relationship Diagram (ER Diagram):

```mermaid
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : "has"
    CUSTOMER ||--o{ ORDER : "places"
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : "receives"
    INVOICE ||--|{ ORDER : "covers"
    ORDER ||--|{ ORDER-ITEM : "includes"
    PRODUCT-CATEGORY ||--|{ PRODUCT : "contains"
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
```


## Maps

### Example 1 (Polygon):

```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [123.80, 15.31],
            [123.80, 10.31],
            [118.80, 10.31],
            [118.80, 15.31],
            [123.80, 15.31]
          ]
        ]
      }
    }
  ]
}
```
