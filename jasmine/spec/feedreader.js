/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that each feed  in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		
		it('urls are defined', function(){
			for(const feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}
		});


        /* test that loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('have defined non-empty names', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
		
    });


    /*test suite named "The menu" */
	describe('The Menu', function(){
		
		/* test that ensures the menu element is hidden by default */
		it('menu element is hidden', function(){
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		
		/* test that ensures the menu element changes visibility when the menu icon is clicked. */
		it('menu is visible/hidden on click', function() {
            
			$('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
			$('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
	});
	

        
    /*new test suite named "Initial Entries" */
	describe("Initial Entries", function() {

    /* remove any old feeds. Since loadFeed() is asynchronous, we use the beforeEach loop and the asynchronous done() function */
        beforeEach(function(done) {
             $('.feed').empty();
            /* ensure loadFeed completes before running the test */
            loadFeed(0, done);
        });
        /* Ensure there is at least one .entry element within the feed container*/
        it('contain at least one entry', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });


      /* new test suite named "New Feed Selection" */ 
   describe('New Feed Selection', function() {
        /* Hold the feed entries before and after switching feed selection */
        let oldEntries;
        let newEntries;

        
        beforeEach(function(done) {
            /* load the first feed */
            loadFeed(0, function() {
                oldEntries = $('.feed').html();
            
                /* switch to the next feed */  
                loadFeed(1, function() {
                    newEntries = $('.feed').html();
                    done();
                });
            });
        });

        /* Ensure that when a new feed is loaded by the loadFeed function 
         * the content actually changes.
         */
        it('changes the content', function() {
            expect(oldEntries).not.toBe(newEntries);
        });
    });
	
}());
