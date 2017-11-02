package com.hugui.yihun;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 
 * @author hugui
 *
 */

@SpringBootApplication
public class YiHunApplication {

	public static Integer a = new Integer(12);

	public static void main(String[] args) {
		SpringApplication.run(YiHunApplication.class, args);
	}
}
