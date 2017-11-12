package com.hugui.yihun.web;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * @author hugui
 *
 */

@Controller
@RequestMapping("/contactus")
public class ContactUsController {

	@Autowired
	private JavaMailSender mailSender;

	@RequestMapping(value="sendemail", method=RequestMethod.GET)
	@ResponseBody
	public String sendEmail(HttpServletRequest request) {

		String content = request.getParameter("content");
		String name = request.getParameter("name");
		String phoneNumber = request.getParameter("phone");

		MimeMessage mimeMessage = mailSender.createMimeMessage();
		MimeMessageHelper helper;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			
			helper = new MimeMessageHelper(mimeMessage, true);
			helper.setFrom("hg_614@163.com");
			helper.setTo("530412087@qq.com");
			helper.setSubject("主题：问题反馈");
			helper.setText("<html><body>" 
					+ "你好 管理员 , <br>" 
					+ "  姓名：" + name + "<br>" 
					+ "  手机：" + phoneNumber + "<br>"
					+ "  时间：" + sdf.format(new Date()) + "<br>"
					+ "  反馈内容：" + content + "<br>" 
					+ "</body></html>", true);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

		mailSender.send(mimeMessage);

		return "信息已经反馈，如需要帮助稍后会有工作人员给您答复! 谢谢支持^_^";
	}

}
