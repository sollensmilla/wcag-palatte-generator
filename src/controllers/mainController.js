/**
 * Controller for handling the main page.
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */

export function getHomePage(req, res) {
  res.render('index', { title: 'Test App', message: 'Hi from the controller!' })
}
