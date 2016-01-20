<?php
if(isset($_POST['submit'])) {
    if(isset($_POST['g-recaptcha-response'])){
        $captcha = $_POST['g-recaptcha-response'];
    }
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdDLwYTAAAAAHgrMLhgTJRZcuf5X3QQ8QFDvmPC&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
    $res = json_decode($response);
    if($res->success == false) {
        echo_error();
    } elseif ($res->success == true) {
        $to = "fowlerd11@gmail.com";
        $name = $_POST['name'];
        $email = $_POST['email'];
        if(isset($_POST['title'])) {
            $subject = $name . ": " . $_POST['title'];
        } else {
            $subject = $name . ": Devin inquiry";
        }
        $message = $_POST['content'];
    
        $headers = "From:" . $email;
        if(mail($to,$subject,$message,$headers)) {
            header('Location: http://devinfowler.x10.bz');
        } else {
            echo_error();
        }
    }
} else {
    echo_error();
}

function echo_error() {
        echo "
			<!DOCTYPE html>
			<html lang=\"en\">
				<head>
					<link href='//fonts.googleapis.com/css?family=Roboto:500,900,300,700,400,100' rel='stylesheet'>
					<title>Submitting failed...</title>
					<meta charset=\"UTF-8\">
					<meta name=\"description\" content=\"\">
					<meta name=\"keywords\" content=\"\">
					<meta name=\"author\" content=\"Cryptocosm Developers, Samuel Steele, Devin Fowler\">
					<link rel=\"icon\" href=\"/img/apple-touch-icon.png\">
					<link rel=\"apple-touch-icon\" href=\"/img/apple-touch-icon.png\">
					<link href=\"/css/styles.css\" rel=\"stylesheet\">
					<script src=\"//cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js\"></script>
					<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">
					<style>
					
						#card {
							width: 75%;
							background-color: #FAFAFA;
							box-shadow: 0px 4px 12px #9E9E9E;
							border-radius: 2px;
							position: absolute;
							padding: 2%;
							top: 35%;
							left: 10.5%;
							text-align: center;
							margin-bottom: 5%;
						}
						
						#card img {
							opacity: .88;
							border-radius: 2px;
							width: 50%;
							height: auto;
						}
					</style>
					
					<script>
						function goBack() {
							window.history.back()
						}
					</script>
					
				</head>
				
				<body>
					<div class=\"banner\">
						<a id=\"title\" href=\"/index.html\">DEVIN FOWLER</a>
						<div id=\"canvas\"></div>
					</div>
					
					<div id=\"card\">
					
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						
						<div>There was an error processing your message. Sorry.&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"\" onClick=\"goBack()\">Back</a></div>
						
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						
					</div>
					
					<div id=\"footercard\" style=\"margin-top:17%;\">
				
							<div id=\"ft-contact\" class=\"ft-el\">
								
								<p class=\"ft-heading\">CONTACT:</p>
								<p>&nbsp;<a href=\"mailto:fowlerd11@gmail.com?subject:Contact%20Cryptocosm\">E-Mail</a>
								</p>
								<p>&nbsp;<a href=\"http://twitter.com/DevinFowler11\">Twitter</a>
								</p>
								<p>&nbsp;<a href=\"https://www.linkedin.com/pub/devin-fowler/b8/292/49\">LinkedIn</a>
								</p>
									
							</div>
								
							<div id=\"ft-line\" class=\"ft-el\"></div>
								
							<div id=\"ft-sitemap\" class=\"ft-el\">
								
								<div id=\"ft-sitemap-left\">
									
									<p class=\"ft-heading\">SITEMAP:</p>
									<p>&nbsp;<a href=\"/\">Home</a>
									</p>
									<p>&nbsp;<a href=\"/about\">About</a>
									</p>
									<p>&nbsp;<a href=\"/projects\">Projects</a>
									</p>
										
								</div>
									
								<div id=\"ft-sitemap-right\">
									
									<p><a href=\"/resume\">Resume</a>
									</p>
									<p><a href=\"/contact\">Instant Message</a>
									</p>
										
								</div>
									
							</div>
								
							<p id=\"copyright\">© 2015 <a href=\"http://cryptocosm.x10.bz\">Cryptocosm Developers</a> | All Rights Reserved</p>
								
						</div>
						
						<script src=\"/js/animation.js\" type=\"text/javascript\"></script>
						
				</body>
		</html>";
}
?>