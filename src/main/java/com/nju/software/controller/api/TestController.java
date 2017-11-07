package com.nju.software.controller.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.apache.lucene.search.BooleanQuery;
import org.elasticsearch.action.delete.DeleteResponse;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.action.update.UpdateRequest;
import org.elasticsearch.action.update.UpdateResponse;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.RangeQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.mysql.jdbc.UpdatableResultSet;

@Controller
public class TestController {

	@Autowired
	private TransportClient transportClient;
	Logger logger = LoggerFactory.getLogger(TestController.class);

	@RequestMapping(value = "/person", method = RequestMethod.GET)
	public ResponseEntity get(
			@RequestParam(value = "name", required = true, defaultValue = "lirui") String name,
			Model model) {

		XContentBuilder xContentBuilder = null;
		try {
			xContentBuilder = XContentFactory.jsonBuilder().startObject()
					.field("name", name).endObject();
		} catch (Exception e) {

		}
		IndexResponse result = transportClient.prepareIndex("people", "man")
				.setSource(xContentBuilder).get();
		return new ResponseEntity(result.getId(), HttpStatus.OK);
	}

	@RequestMapping(value = "/person", method = RequestMethod.DELETE)
	public ResponseEntity delete(
			@RequestParam(value = "id", required = true, defaultValue = "lirui") String id,
			Model model) {

		DeleteResponse result = transportClient.prepareDelete("people", "man",
				id).get();
		return new ResponseEntity(result.getId(), HttpStatus.OK);
	}

	@RequestMapping(value = "/person", method = RequestMethod.POST)
	public ResponseEntity boolquery(
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "country", required = true) String country,
			@RequestParam(value = "age", required = true) Integer age,
			Model model) {

		BoolQueryBuilder booleanQuery = QueryBuilders.boolQuery();
		booleanQuery.must(QueryBuilders.matchQuery("name", name));
		booleanQuery.must(QueryBuilders.matchQuery("country", country));
		RangeQueryBuilder rangeQueryBuilder = QueryBuilders.rangeQuery("age");
		rangeQueryBuilder.from(age);
		booleanQuery.filter(rangeQueryBuilder);
		SearchRequestBuilder searchRequestBuilder=transportClient.prepareSearch("people").setTypes("man")
				.setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
				.setQuery(booleanQuery).setFrom(0).setSize(10);
	    SearchResponse response=searchRequestBuilder.get();
	    List<Map<String, Object>> list=new ArrayList<Map<String,Object>>();
		for(SearchHit hit:response.getHits()){
			list.add(hit.getSource());
		}
	    	return new ResponseEntity(list, HttpStatus.OK);
	}

	@PutMapping(value = "/person")
	public ResponseEntity update(
			@RequestParam(value = "id", required = true) String id,
			@RequestParam(value = "name") String name,
			@RequestParam(value = "country") String country, Model model) {

		UpdateRequest request = new UpdateRequest("people", "man", id);
		XContentBuilder xContentBuilder;
		try {
			xContentBuilder = XContentFactory.jsonBuilder().startObject();
			if (name != null) {
				xContentBuilder.field("name", name);
			}
			if (country != null) {
				xContentBuilder.field("country", country);
			}
			xContentBuilder.endObject();
			request.doc(xContentBuilder);
		} catch (Exception e) {

			e.printStackTrace();
		}
		UpdateResponse result = null;
		try {
			result = transportClient.update(request).get();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new ResponseEntity(result.getResult(), HttpStatus.OK);
	}
}
