# student_new_tool
sass --watch assets/styles/scss:assets/styles/css
		
form[id^="gform_"] .gform_body .ginput_container input{
    border: 1px solid #FFD700;
	height: 50px;
	border-radius: 6px;
	margin: 0 0 10px;
}
			
form[id^="gform_"] .gform_footer input[type="submit"]{
min-width: 100%;
    background-image: linear-gradient(to right, #FFD700, #F98D28);
    font-size: 16px;
    font-weight: 700;
	margin:0;
}
.c-main2 {
    background-image: url(http://site.talentedge.in/wp-content/uploads/2021/05/cmain2.png);
    background-size: contain;
    background-color: #e7e7e7;
    background-repeat: no-repeat;
  
}



/* form style	 */
	ul#gform_fields_57 {
   list-style: none;
   padding: 0;
}
			form[id^="gform_"] .gform_body .gfield{
				margin:0;
			}
.u-form form[id^="gform_"] .gform_body .ginput_container input,
		form[id^="gform_"] .gform_body .ginput_container select:first-child	{
    
    border: 1px solid #FFD700;
    height: 50px;
    border-radius: 6px !important;
    width: 100%;
    margin-bottom: 10px;
    background: transparent;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    color: #b1abab;
    font-size: 14px;
			padding-left: 10px !important;
}
	
	.u-form form[id^="gform_"] .gform_footer  .gform_button {
    background: linear-gradient(
90deg
, #FFD700 12.62%, #F98D28 73.53%);
    border-radius: 6px;
    padding: 14px;
    color: white;
    font-weight: 700;
		width: 100%;
		border: none;
}
	
	
form[id^="gform_"] .gform_body  label{
	display: none;
}
	.u-form form input::placeholder {
 text-align: center;
 font-family: Montserrat;
 font-style: normal;
 font-weight: bold;}
	
	ul#gform_fields_57 {
   list-style: none;
   padding: 0;
}
.enroll-form form input::placeholder {
 text-align: center;
 font-family: Montserrat;
 font-style: normal;
 font-weight: bold;}
ul#gform_fields_2 {
list-style: none;
}
	select#input_2_15, select#input_2_4 {
width: 100%;
}
#gform_2{padding: 0 !important;}


.gform_body ul{
padding:0;
}





/**********************
calendar
***********************/
.academic-calendar {
  .top-box-gray{
    background-color: #f8fafb;
    padding: 22px;
    border-radius: 10px 10px 0 0;
    h2{
      img{
        vertical-align: middle;
        margin-right: 20px;
      }
      font-weight: 600;
      color: $text-blue;
      font-size: 18px;
    }
  }
  .indication {
    width: 110px;
    background-color: #f8fafb;
    border-radius: 4px;
    padding: 15px 10px 10px;
    margin-bottom: 20px;
    position: relative;

    ul {
      li {
        font-size: 12px;
        line-height: 20px;
        padding: 5px;
        list-style: none;
        margin-bottom: 7px;

        .mark {
          width: 20px;
          display: block;
          height: 6px;
          border-radius: 50px;
          margin-bottom: 3px;
        }
        &:nth-child(1) .mark{
          background-color: #b1113e;
        }
        &:nth-child(2) .mark{
          background-color: #993d90;
        }
        &:nth-child(3) .mark{
          background-color: #166302;
        }
        &:nth-child(4) .mark{
          background-color: #fcbb1e;
        }
      }
    }
  }
}

  <article id="calendar" class="academic-calendar">
                <div class="top-box-gray">
                    <h2><img src="assets/img/calendar-icon.png" alt="icon"> Academic Calendar </h2>
                </div>
                <div class="indication">
                <ul class="legends">
					<li><span class="mark"></span> Examinations</li>
					<li><span class="mark"></span>Assignments</li>
					<li><span class="mark"></span>Project</li>
					<li><span class="mark"></span>Virtual Lab</li>
				</ul>
            </div>
            </article>


 url("<?php echo site_url();?>/wp-content/uploads/2021/05/