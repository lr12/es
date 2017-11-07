package com.nju.software.config;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nju.software.util.ConstantUtil;
import com.sun.corba.se.impl.orbutil.closure.Constant;

@Configuration
public class EsConfig {

	@Bean
	public TransportClient client() throws UnknownHostException{
		
		Settings settings=Settings.builder().put("cluster.name","lili").build();
		TransportClient client = new PreBuiltTransportClient(settings);
		InetSocketTransportAddress inetSocketTransportAddress=new InetSocketTransportAddress(InetAddress.getByName(ConstantUtil.ip), ConstantUtil.port);
		client.addTransportAddress(inetSocketTransportAddress);
		return client;
	}
	
}
