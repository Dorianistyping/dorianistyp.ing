    const quotes = [
      "The leader of armies is the arbiter of the people's fate, the man on whom it depends whether the nation shall be in peace or in peril.",
      "To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
      "The skillful leader subdues the enemy's troops without any fighting; he captures their cities without laying siege to them;",
      "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
      "If you know yourself but not the enemy, for every victory gained you will also suffer a defeat.",
      "If you know neither the enemy nor yourself, you will succumb in every battle.",
      "He will win who knows when to fight and when not to fight.",
      "He will win whose army is animated by the same spirit throughout all its ranks.",
      "He will win who, prepared himself, waits to take the enemy unprepared.",
      "He will win who has military capacity and is not interfered with by the sovereign.",
      "One may know how to conquer without being able to do it.",
      "Security against defeat implies defensive tactics; ability to defeat the enemy means taking the offensive.",
      "The skillful fighter puts himself into a position which makes defeat impossible, and does not miss the moment for defeating the enemy.",
      "A victorious army opposed to a routed one is as a pound's weight placed in the scale against a single grain.",
      "The onrush of a conquering force is like the bursting of pent-up waters into a chasm a thousand fathoms deep.",
      "People know what they do; frequently they know why they do what they do, but what they don't know is what what they do does.",
      "What strikes me is the fact that in our society, art has become something which is related only to objects and not to individuals, or to life. But couldn't everyone's life become a work of art?",
      "Maybe the target nowadays is not to discover what we are but to refuse what we are.",
      "Justice must always question itself, just as society can exist only by means of the work it does on itself and its institutions.",
      "Schools serve the same social functions as prisons and mental institutions—to define, classify, control, and regulate people.",
      "Nobody realizes that some people expend tremendous energy merely to be normal."
    ];

    function getRandomQuote() {
      const index = Math.floor(Math.random() * quotes.length);
      return quotes[index];
    }

    // Show a random quote immediately
    document.getElementById("quote").textContent = getRandomQuote();