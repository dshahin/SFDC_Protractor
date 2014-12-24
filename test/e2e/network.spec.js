browser.ignoreSynchronization = true;
describe("health", function(){
    //var ptor = protractor.getInstance();

    describe("index", function(){
        it("should display the correct title", function(){
            browser.get('/');
            expect( browser.getTitle() ).toBe('salesforce.com - Customer Secure Login Page');
        });

        it("it should login", function(){
            var username = element(by.id('username')),
                password = element(by.id('password')),
                loginButton = element(by.id('Login')),
                currentUrl;

            browser.getCurrentUrl().then(function(url){
                currentUrl = url;
            }).then(function(){
                username.sendKeys(process.env.SFDC_USERNAME);
                password.sendKeys(process.env.SFDC_PASSWORD);
                loginButton.click().then(function(){
                    //wait for intermittent screen
                    browser.wait(function() {
                        return browser.getCurrentUrl().then(function (url) {
                            return url !== currentUrl;
                        });
                    },10000)
                }).then(function(){
                    //wait for home screen
                    browser.wait(function() {
                        return browser.getTitle().then(function (title) {
                            return title == 'Force.com Home Page ~ salesforce.com - Developer Edition';
                        });
                    },10000)
                }).then(function(){
                    //click on console
                    browser.get('https://shahinhealth-dev-ed--h1shahin.na16.visual.force.com/apex/patientNetwork?id=p00j0000000L0XJ');

                });
            });
        });
    });
});
