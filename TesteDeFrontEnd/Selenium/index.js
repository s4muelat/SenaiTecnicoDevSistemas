const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver'); 

(async function loginScript() {
    let driver = await new Builder().forBrowser('chrome').build(); 
    try {
        await driver.manage().window().maximize();
        await driver.get('file:///C:/meusFontes/SenaiTecDevSistemas/TestesdeFrontEnd/TestePratico1/index.html')
        await driver.findElement(By.id('username')).sendKeys('admin')
        await driver.findElement(By.id('password')).sendKeys('admin123');  
        await driver.findElement(By.xpath("//button[text()='Entrar']")).click();  
        await driver.wait(until.titleContains('sucesso.html'), 10000);  

        console.log('Login realizado com sucesso!');
    } catch (error) {
        console.error('Erro durante o login:', error);
    } finally {
        await driver.quit();
    }
})();
