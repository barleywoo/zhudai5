function init_location(location , sub_location, select_id)
{
	var province = document.getElementById(select_id + '_location');
	var city	   = document.getElementById(select_id + '_sublocation');
	for(i=0;i<100;i++)
	{
		if(LSK[i] != undefined)
		{
			province.options[province.length] = new Option(LSK[i],i);
		}
	}
	province.value = location;
	
	if(location > 0)
	{
		for(i=0;i<100;i++)
		{
			var city_id = location*100+i;
			if(LOK[location][city_id] != undefined)
			{
				city.options[city.length] = new Option(LOK[location][city_id],city_id);
			}
		}

		if(sub_location > 0)
		{	
			city.value = sub_location;
		}
	}
	else
	{
		city.options[city.length] = new Option(LOK[0][0],0);
	}
}
function change_location(location, select_id)
{
	var city = document.getElementById(select_id + '_sublocation');
	city.length = 0;
	for(i=0;i<100;i++)
	{
		city_id = location * 100 + i;
		if(LOK[location][city_id] != undefined)
		{
			city.options[city.length] = new Option(LOK[location][city_id],city_id);
		}
	}
}

function change_school(location, select_id)
{

	var school = document.getElementById(select_id);
	school.length = 0;
	for(key in SOK[location])
	{
		school.options[school.length] = new Option(SOK[location][key],key);
	}
}
function set_bl_cookie(bl_id)
{
	setCookie('bl_id', bl_id,'10');
	setCookie('bl_top', 1);
}
function get_star(star, img_url)
{
	
	if(star == 0)
		return '';
	ret = '';
	for(i=1;i<=star;i++)
	{
		ret += '<img src="'+ img_url +'" />';
	}
	return ret;
}
function select_age(type)
{
	var c_min_age = document.getElementById('min_age');
	var c_max_age = document.getElementById('max_age');
	if(type == 'f')
	{
		c_min_age.value = '20';
		c_max_age.value  = '30';
	}
	else
	{
		c_min_age.value = '25';
		c_max_age.value  = '35';
	}
}

