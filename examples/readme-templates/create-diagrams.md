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

### Kanban Board:

```mermaid
kanban
  Todo
    [Create Documentation]
    [Create Blog about the new diagram]
  InProgress
    [Create renderer to handle all cases. Extra text for testing purposes.]
  ReadyForDeploy
    [Design grammar]@{ assigned: 'knsv' }
  ReadyForTest
    [Create parsing tests]@{ ticket: MC-2038, assigned: 'K.Sveidqvist', priority: 'High' }
    [Last item]@{ priority: 'Very Low', assigned: 'knsv' }
  Done
    [Define getData]
    [Title of diagram is more than 100 chars when duplicated]@{ ticket: MC-2036, priority: 'Very High'}
    [Update DB function]@{ ticket: MC-2037, assigned: 'knsv', priority: 'High' }
  CannotReproduce
    [Weird flickering in Firefox]
```

## Maps

### Example 1 (Original Polygon):

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
            [-90, 35],
            [-90, 30],
            [-85, 30],
            [-85, 35],
            [-90, 35]
          ]
        ]
      }
    }
  ]
}
```

### Example 2 (Polygon with Updated Coordinates):

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
            [-90, 35],
            [-90, 30],
            [-85, 30],
            [-85, 35],
            [-90, 35],
            [123.885389, 10.3156944]
          ]
        ]
      }
    }
  ]
}
```