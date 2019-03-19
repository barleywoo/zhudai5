package com.apply.credit;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.util.Base64;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.apply.credit.util.DbUtil;

/**
 * Servlet implementation class Apply01Servlet
 */
public class Apply01Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Apply01Servlet() {
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void loan01(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		int i=0;
		int j=0;
		int x = i+j;
	}


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String name = request.getParameter("name");
			String mobile = request.getParameter("mobile");
			mobile = new String(Base64.getDecoder().decode(mobile), Charset.forName("UTF-8"));
			String sex = request.getParameter("sex");
			String city = request.getParameter("city");
			String money = request.getParameter("money");
			String source = request.getParameter("source");
			String weburl = request.getParameter("weburl");
			String ismove = request.getParameter("ismove");
			String mid = request.getParameter("mid");
			String thirdUid = request.getParameter("thirdUid");
			String isdecode = request.getParameter("isdecode");
			String query = "select count(*) num from tb_apply t where t.mobile = '"+ mobile +"'";
			Integer n = DbUtil.readDataSingle(query);
			
			if(n != null && n > 0) {
				rand(response, "3");
			} else {
				// 插入
				String inset = "insert into tb_apply(name,mobile,sex,city,money,source,weburl,ismove,mid,third_Uid,isdecode) values('" + name+ "','" + mobile+ "','" + sex+ "','" + city+ "','" + money+ "','" + source+ "','" + weburl+ "','" + ismove+ "','" + mid+ "','" + thirdUid+ "','" + isdecode + "')";
				
				int i = DbUtil.readDataUpdate(inset);
				if(i == 0) {
					rand(response, "5");
				} else {
					// 成功
					rand(response, "1");
				}
			}
		} catch (Exception e) {
			rand(response, "2");
			e.printStackTrace();
		}
	}
	
	protected void rand(HttpServletResponse response, String js) throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json; charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println(js);
		out.flush();
		out.close();
	}

}
