# sushiswap-relayers-list


```json
 {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "http://finance.sushiswap.relayer/relayer.list.json",
	"type": "array",
	"definitions": {},
	"title": "sushiswap relayer list",
	"description": "JSON format used as a registry of all sushiswap relayers",
	"items": {
		"$id": "#/address",
		"type": "string",
		"title": "Relayer Contract Address",
		"description": "The smart contract address for the relayer",
		"default": "",
		"examples": [
			"0x686a01120827cae5230bb81d5c2a74667c8b7552",
			"0x9510eee077058d82239896899ca080a8b18a6457",
			"0xd3d5a9fc1c284167ed8306115451c15521c17a23"
		],
		"pattern": "^([0-9a-f]{40})$"
	}
}
```
