/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

importScript("Dimension.js");
importScript("qb/ESQuery.js");

if (!Mozilla) var Mozilla = {"name": "Mozilla", "edges": []};

(function(){

	var PROJECTS = ["2.2"];
	var NOM_PROJECTS = PROJECTS.map(function(p){
		return p + "?";
	});
	var BLOCKER_PROJECTS = PROJECTS.map(function(p){
		return p + "+";
	});

	Dimension.addEdges(true, Mozilla, [
		{"name": "Devices", "index":"bugs",
			"edges": [
				{"name": "Nominations", "esfilter": {"and": [
					{"terms": {"cf_blocking_b2g": NOM_PROJECTS}}
				]}},
				{"name": "Blockers", "index": "bugs", "esfilter": {"or": [
					{"terms": {"cf_blocking_b2g": BLOCKER_PROJECTS}}
				]}},
				{"name": "Unassigned", "index": "bugs", "esfilter": {"term": {"assigned_to": "nobody@mozilla.org"}}},
				{"name": "Responsibility", "index": "bugs", "isFacet": true, "partitions": [
					{"name": "FxOS Team", "esfilter": {"not": {"terms": {"status_whiteboard.tokenized": ["NPOTB", "POVB"]}}}},
					{"name": "Vendor (POVB)", "esfilter": {"term": {"status_whiteboard.tokenized": "POVB"}}},
					{"name": "Not Part of the Build (NPOTB)", "esfilter": {"term": {"status_whiteboard.tokenized": "NPOTB"}}}
				]},
				{"name": "Release",
					"edges":PROJECTS.map(function(v){
						return {"name": v, "value":v, "esfilter": {"terms": {"cf_blocking_b2g": [v + "+", v + "?"]}}}
					})
				},
				{"name": "Partners",
					"edges": [
						{ 
							"name": "L_Porting",
							"value": "L_Porting",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [
									{"term": {"blocked_by":1094121}},
									{"term": {"blocked_by":1107298}},
									{"term": {"blocked_by":1107303}},
									{"term": {"blocked_by":1107300}}
								]},
							]}
						},
						{ 
							"name": "BlueDroid",
							"value": "BlueDroid",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [
									{"term": {"blocked_by":1005934}},
									{"term": {"blocked_by":1065336}}
								]},
							]}
						},
						{ 
							"name": "CAF",
							"value": "CAF",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [
									{"term": {"blocked_by":1063044}}
								]},
							]}
						},
						{ 
							"name": "NFC",
							"value": "NFC",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [
									{"term": {"blocked_by":979158}},
									{"term": {"blocked_by":1044428}},
									{"term": {"blocked_by":879861}},
									{"term": {"blocked_by":884594}},
									{"term": {"blocked_by":959434}},
									{"term": {"blocked_by":1028094}},
									{"term": {"blocked_by":1102019}},
									{"term": {"blocked_by":1042851}},
									{"term": {"blocked_by":1084440}},
									{"term": {"blocked_by":1082443}},
								]},
							]}
						},
						{ 
							"name": "Privacy",
							"value": "Privacy",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [
									{"term": {"blocked_by":1069915}},
									{"term": {"blocked_by":1057676}},
									{"term": {"blocked_by":1057675}}
								]},
							]}
						},
						{ 
							"name": "Copy Paste",
							"value": "Copy Paste",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [ 
									{"term": {"blocked_by":1092944}},
									{"term": {"blocked_by":1023688}}
								]},
							]}
						},
						{ 
							"name": "Device Blocker",
							"value": "Device Blocker",
							"esfilter": {"and": [
								{"term": {"cf_feature_b2g": "2.2+"}},
								{"or": [ 
									{"term": {"id":1091544}},
									{"term": {"id":1061130}},
									{"term": {"id":1096815}},
									{"term": {"id":1112471}},
									{"term": {"id":1112484}}
								]},
							]}
						},
						{ 
							"name": "Multiple Search",
							"value": "Multiple Search",
							"esfilter": {"and": [
								{"term": {"cf_feature_b2g": "2.2+"}},
								{"or": [ 
									{"term": {"id":1099157}},
									{"term": {"id":1098494}}
								]},
							]}
						},
						{ 
							"name": "RTL",
							"value": "RTL",
							"esfilter": {"and": [
								{"term": {"cf_blocking_b2g": "2.2+"}},
								{"or": [ 
									{"term": {"blocked_by":1064489}},
									{"term": {"blocked_by":1064539}},
									{"term": {"blocked_by":1064569}},
									{"term": {"blocked_by":1064590}},
									{"term": {"blocked_by":1064617}},
									{"term": {"blocked_by":1071888}},
									{"term": {"blocked_by":1071890}},
									{"term": {"blocked_by":1071891}},
									{"term": {"blocked_by":1071906}},
									{"term": {"blocked_by":1071918}},
									{"term": {"blocked_by":1072005}},
									{"term": {"blocked_by":1087056}},
									{"term": {"blocked_by":1088436}},
									{"term": {"blocked_by":1096689}},
									{"term": {"blocked_by":1088976}},
									{"term": {"blocked_by":1088977}},
									{"term": {"blocked_by":1071888}},
									{"term": {"blocked_by":1072027}},
									{"term": {"blocked_by":1101086}},
									{"term": {"blocked_by":1101097}},
									{"term": {"blocked_by":1101107}},
									{"term": {"blocked_by":1101110}},
									{"term": {"blocked_by":1101112}},
									{"term": {"blocked_by":1101117}},
									{"term": {"blocked_by":1101119}},
								]},
							]}
						},
					]
				}
			]
		}
	]);
})();

