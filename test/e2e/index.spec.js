browser.ignoreSynchronization = true;
describe("health", function(){
	//var ptor = protractor.getInstance();

	describe("index", function(){
		it("should display the correct title", function(){
			browser.get('/');
			expect( browser.getTitle() ).toBe('salesforce.com - Customer Secure Login Page');
		});

		it("should display on click", function(){
			var username = element(by.id('username')),
				password = element(by.id('password')),
				loginButton = element(by.id('Login'));
			username.sendKeys(process.env.SFDC_USERNAME);
			password.sendKeys(process.env.SFDC_PASSWORD);
			loginButton.click();
			//button.click();
			browser.wait(function(){},10000);
		});
	});
});
