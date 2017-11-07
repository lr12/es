package com.example;

import java.util.concurrent.atomic.AtomicInteger;

public class Test {

	public static void main(String[] args){
		
		AtomicInteger atomicInteger=new AtomicInteger();
		atomicInteger.set(1);
		System.out.println(atomicInteger.getAndIncrement());
		System.out.println(atomicInteger.getAndIncrement());
	}
}
