/**
 * @authors haoxuyang 1061811549@qq.com
 * @date    2019-02-25 10:15:33
 * @version $Id$
 */
$(function() {
	$('button').click(function(event) {
		console.log($('b').not('.123').text());/*ele*/
	});
});