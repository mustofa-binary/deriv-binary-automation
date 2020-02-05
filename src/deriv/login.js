const { setup_config, By, until, expect, driver } = require('../config/setup')

describe('Login deriv', () => {
    it('setup box', async () => {
        await driver.get(setup_config.test_url);
        const curr_title = await driver.getTitle()
        if(curr_title.toString() === 'Privacy error') {
            await driver.findElement(By.id('details-button')).click()
            await driver.findElement(By.id('proceed-link')).click()
        }
        await driver.wait(until.elementLocated(By.id('dt_login_button')));
        await driver.executeScript(`
            localStorage.setItem("config.app_id", "${setup_config.app_id}")
            localStorage.setItem("config.server_url", "${setup_config.server_url}")
        `)
        await driver.findElement(By.id('dt_login_button')).click();
    });

    it('Login to oauth', async () => {
        await driver.wait(until.elementLocated(By.id('txtEmail')));
        const txt_email = await driver.findElement(By.name('email'))
        const txt_pass = await driver.findElement(By.name('password'))
        await txt_email.sendKeys(setup_config.email);
        await txt_pass.sendKeys(setup_config.password);

        const login_btn = await driver.findElement(By.name('login'))
        await login_btn.click()
    })

    it('check if its logged in', async () => {
        const current_url = await driver.getCurrentUrl()
        const url_array = current_url.toString().split('?')
        if (url_array[0] !== setup_config.test_url) {
            const new_url = `${setup_config.test_url}?${url_array[1]}`
            await driver.get(new_url)
        }

        const title = await driver.getTitle();
        expect(title).to.equal('Trade | Deriv')
    })
});