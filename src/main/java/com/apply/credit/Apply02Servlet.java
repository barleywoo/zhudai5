package com.apply.credit;

import com.apply.credit.util.DbUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.util.Base64;

/**
 * Servlet implementation class Apply01Servlet
 */
public class Apply02Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public Apply02Servlet() {
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 * 'id':id,'is_gx':is_gx,'house':house,'car':car, 'baodan_is':baodan_is,
	 * 		'birthday':birthday,'gongjijin':gongjijin,'creditcard_situation':credit_card,
	 * 		'shebao':work_shebao,'work_wage_give_type':work_wage_give_type,'weili':weili,'zhima':zhima
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String id = request.getParameter("id");
			String mobile = request.getParameter("is_gx");
			String is_gx = request.getParameter("is_gx");
			String house = request.getParameter("house");
			String car = request.getParameter("car");
			String baodan_is = request.getParameter("baodan_is");
			String birthday = request.getParameter("birthday");
			String gongjijin = request.getParameter("gongjijin");
			String credit_card = request.getParameter("creditcard_situation");
			String shebao = request.getParameter("shebao");
			String work_wage_give_type = request.getParameter("work_wage_give_type");
			String weili = request.getParameter("weili");
			String zhima = request.getParameter("zhima");

			String query = "select count(*) num from tb_apply_loan t where t.id = '"+ id +"'";
			Integer n = DbUtil.readDataSingle(query);
			
			if(n != null && n > 0) {
				rand(response, "3");
			} else {
				// 插入
				String inset = "insert into tb_apply_loan(id,mobile,is_gx,house,car,baodan_is,birthday,gongjijin,credit_card,shebao,work_wage_give_type,weili,zhima) " +
						"values('" + id+ "','" + mobile+ "','" + is_gx+ "','" + house+ "','" + car+ "','" + baodan_is+ "','" + birthday+ "','" + gongjijin+ "','" + credit_card+ "','" + shebao+ "','" + work_wage_give_type+ "','" +weili+ "','"+zhima + "')";
				
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
