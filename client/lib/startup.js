Meteor.startup(function () {
    Path = DepsPath();

    Meteor.autosubscribe(function () {
        Meteor.subscribe('superChatMsgs', Path());
    });
    Meteor.subscribe('usersSuperChat');
    Meteor.subscribe('superChatUserPresence');

    // Marked options

    marked.setOptions({
        langPrefix: '',
        breaks: true,
        sanitize: true,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        }
    });
});
