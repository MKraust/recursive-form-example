export default [
    {
      "name": "general",
      "title": "General Settings",
      "description": null,
      "fields": [
        {
          "type": "string",
          "name": "strategy_name",
          "title": "Strategy Name",
          "tooltip": null,
          "is_required": true
        },
        {
          "type": "select",
          "name": "engine",
          "title": "Repricer",
          "tooltip": null,
          "is_required": true,
          "possible_values": {
            "dsautopilot": "Use dsautopilot repricer",
            "integration_InformedCo": "Use Informed.co Repricer"
          }
        },
        {
          "type": "block",
          "name": "stock_count",
          "title": "Stock Count",
          "tooltip": null,
          "is_required": false,
          "additional": {
            "class": "form-inline"
          },
          "children": [
            {
              "type": "integer",
              "name": "min_stock_count",
              "title": "Min Stock Count",
              "tooltip": null,
              "is_required": true,
              "additional": {
                "min": 0
              }
            },
            {
              "type": "integer",
              "name": "max_stock_count",
              "title": "Max Stock Count",
              "tooltip": null,
              "is_required": true,
              "additional": {
                "min": 0
              }
            }
          ]
        },
        {
          "type": "integer",
          "name": "max_delivery_in_days",
          "title": "Max supplier’s delivery time (in days)",
          "tooltip": null,
          "is_required": true,
          "additional": {
            "min": 0
          }
        }
      ],
      "skip_condition": null
    },
    {
      "name": "competitive",
      "title": "Competitive Settings",
      "description": null,
      "fields": [
        {
          "type": "block",
          "name": "conditions",
          "title": "Conditions list",
          "tooltip": null,
          "is_required": false,
          "additional": {
            "class": "form-inline"
          },
          "children": [
            {
              "type": "select",
              "name": "conditions[is_listing_has_sellers]",
              "title": "When a listing has sellers with “Fulfilled by Amazon” or “Seller Fulfilled Prime”",
              "tooltip": null,
              "is_required": true,
              "possible_values": [
                {
                  "type": "select_item",
                  "name": "dont_reprice",
                  "title": "Don’t reprice",
                  "tooltip": null,
                  "is_required": false
                },
                {
                  "type": "select_item",
                  "name": "set_stock_to_zero",
                  "title": "Set stock to 0",
                  "tooltip": null,
                  "is_required": false
                }
              ]
            },
            {
              "type": "select",
              "name": "conditions[is_no_competition]",
              "title": "When there is no competition",
              "tooltip": null,
              "is_required": true,
              "possible_values": [
                {
                  "type": "select_item",
                  "name": "use_max_price",
                  "title": "Use Max Price",
                  "tooltip": null,
                  "is_required": false
                },
                {
                  "type": "select_item",
                  "name": "get_buy_box_and_increase_profit",
                  "title": "Get buybox and increase profit",
                  "tooltip": null,
                  "is_required": false,
                  "children": [
                    {
                      "type": "block",
                      "name": null,
                      "title": null,
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "class": "input-group"
                      },
                      "children": [
                        {
                          "type": "integer",
                          "name": "actions[is_no_competition][price_step]",
                          "title": "Step by",
                          "tooltip": null,
                          "is_required": true,
                          "additional": {
                            "min": 0
                          }
                        },
                        {
                          "type": "select",
                          "name": "actions[is_no_competition][price_step_type]",
                          "title": "Step type",
                          "tooltip": null,
                          "is_required": true,
                          "possible_values": {
                            "%": "%",
                            "$": "$"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "select",
              "name": "conditions[competition_below_your_min_price]",
              "title": "When the competition is below your Min Price",
              "tooltip": null,
              "is_required": true,
              "possible_values": [
                {
                  "type": "select_item",
                  "name": "use_min_price",
                  "title": "Use Min Price",
                  "tooltip": null,
                  "is_required": false
                },
                {
                  "type": "select_item",
                  "name": "get_buy_box_and_increase_profit",
                  "title": "Get buybox and increase profit",
                  "tooltip": null,
                  "is_required": false,
                  "children": [
                    {
                      "type": "block",
                      "name": null,
                      "title": null,
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "class": "input-group"
                      },
                      "children": [
                        {
                          "type": "integer",
                          "name": "actions[competition_below_your_min_price][price_step]",
                          "title": "Step by",
                          "tooltip": null,
                          "is_required": true,
                          "additional": {
                            "min": 0
                          }
                        },
                        {
                          "type": "select",
                          "name": "actions[competition_below_your_min_price][price_step_type]",
                          "title": "Step type",
                          "tooltip": null,
                          "is_required": true,
                          "possible_values": {
                            "%": "%",
                            "$": "$"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "select",
              "name": "conditions[all_other_cases]",
              "title": "All other cases",
              "tooltip": null,
              "is_required": true,
              "possible_values": [
                {
                  "type": "select_item",
                  "name": "lower_by",
                  "title": "Lower by",
                  "tooltip": null,
                  "is_required": false,
                  "children": [
                    {
                      "type": "block",
                      "name": null,
                      "title": null,
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "class": "input-group"
                      },
                      "children": [
                        {
                          "type": "integer",
                          "name": "actions[all_other_cases][price_step]",
                          "title": "Step by",
                          "tooltip": null,
                          "is_required": true,
                          "additional": {
                            "min": 0
                          }
                        },
                        {
                          "type": "select",
                          "name": "actions[all_other_cases][price_step_type]",
                          "title": "Step type",
                          "tooltip": null,
                          "is_required": true,
                          "possible_values": {
                            "%": "%",
                            "$": "$"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "select_item",
                  "name": "match_competitors_price",
                  "title": "Match competitor’s price",
                  "tooltip": null,
                  "is_required": false
                },
                {
                  "type": "select_item",
                  "name": "get_buy_box_and_increase_profit",
                  "title": "Get buybox and increase profit",
                  "tooltip": null,
                  "is_required": false,
                  "children": [
                    {
                      "type": "block",
                      "name": null,
                      "title": null,
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "class": "input-group"
                      },
                      "children": [
                        {
                          "type": "integer",
                          "name": "actions[all_other_cases][price_step]",
                          "title": "Step by",
                          "tooltip": null,
                          "is_required": true,
                          "additional": {
                            "min": 0
                          }
                        },
                        {
                          "type": "select",
                          "name": "actions[all_other_cases][price_step_type]",
                          "title": "Step type",
                          "tooltip": null,
                          "is_required": true,
                          "possible_values": {
                            "%": "%",
                            "$": "$"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "skip_condition": [
        "engine",
        "!=",
        "dsautopilot"
      ]
    },
    {
      "name": "min_max_prices",
      "title": "Min/Max Price",
      "description": null,
      "fields": [
        {
          "type": "select",
          "name": "profit_type",
          "title": "Select profit type",
          "tooltip": null,
          "is_required": true,
          "possible_values": [
            {
              "type": "select_item",
              "name": "roi",
              "title": "Return on Investment (ROI)",
              "tooltip": null,
              "is_required": false,
              "children": [
                {
                  "type": "block",
                  "name": null,
                  "title": null,
                  "tooltip": null,
                  "is_required": false,
                  "additional": {
                    "class": "form-inline"
                  },
                  "children": [
                    {
                      "type": "integer",
                      "name": "min_roi",
                      "title": "Min ROI",
                      "tooltip": null,
                      "is_required": true,
                      "additional": {
                        "min": 0
                      }
                    },
                    {
                      "type": "integer",
                      "name": "max_roi",
                      "title": "Max ROI (optional)",
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "min": 0
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "select_item",
              "name": "value",
              "title": "Profit Value",
              "tooltip": null,
              "is_required": false,
              "children": [
                {
                  "type": "block",
                  "name": null,
                  "title": null,
                  "tooltip": null,
                  "is_required": false,
                  "additional": {
                    "class": "form-inline"
                  },
                  "children": [
                    {
                      "type": "integer",
                      "name": "min_profit_value",
                      "title": "Min Profit(%)",
                      "tooltip": null,
                      "is_required": true,
                      "additional": {
                        "min": 0
                      }
                    },
                    {
                      "type": "integer",
                      "name": "max_profit_value",
                      "title": "Max Profit(%) (optional)",
                      "tooltip": null,
                      "is_required": false,
                      "additional": {
                        "min": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "skip_condition": null
    }
  ]