import Store from './Store'

var db = {

    reviews: [
        {
            template: 'MED Høring',
            sbsys_no: 6324972562937743,
            public: false,
            title: 'En vindmaskine i din baghave',
            abstract: 'seflihseflsihef ;alsehf ;alseifh a;slefhi as;lefih elsfihsel fihsefl s',
            text: 'asflihsefl isahefl saihef lseifhs elfijas efkhasfl isahe flshef lsajef lseihf alsejf lsaiefh lsef asef',
            answer_guide: 'sfsliefhals efihsefl siae flasihef lsiahefl asijef lashiefl asihef lasihefl aishefsef',
            complaint_guide: 'asflihsf liahsf lasihef lsefh alsfh slefih alsiehf alsefh lasiheal isehflashef',
            status: 'ny',
            groups: 'Gruppe B',
            sort_option: 'alfabetisk',
            deadline_answer: new Date(),
            deadline_comment: new Date(),
            deadline_conclude: new Date(),
            deadline_process: new Date(),
            deadline_review: new Date(),
            contact: 'Havemand Ismael Petersen',
            channels: 'intranet'
        },
        {
            template: 'Budget',
            sbsys_no: 3763,
            public: true,
            title: 'Festen er resten af testen',
            abstract: 'seflihseflsihef ;alsehf ;alseifh a;slefhi as;lefih elsfihsel fihsefl s',
            text: 'asflihsefl isahefl saihef lseifhs elfijas efkhasfl isahe flshef lsajef lseihf alsejf lsaiefh lsef asef',
            answer_guide: 'sfsliefhals efihsefl siae flasihef lsiahefl asijef lashiefl asihef lasihefl aishefsef',
            complaint_guide: 'asflihsf liahsf lasihef lsefh alsfh slefih alsiehf alsefh lasiheal isehflashef',
            status: 'afgjort',
            groups: 'Gruppe B',
            sort_option: 'alfabetisk',
            deadline_answer: new Date(),
            deadline_comment: new Date(),
            deadline_conclude: new Date(),
            deadline_process: new Date(),
            deadline_review: new Date(),
            contact: 'Havemand Ismael Petersen',
            channels: 'facebook'
        },
        {
            template: 'Budget',
            sbsys_no: 846368,
            public: true,
            title: 'Hest fisk hund kat',
            abstract: 'seflihseflsihef ;alsehf ;alseifh a;slefhi as;lefih elsfihsel fihsefl s',
            text: 'asflihsefl isahefl saihef lseifhs elfijas efkhasfl isahe flshef lsajef lseihf alsejf lsaiefh lsef asef',
            answer_guide: 'sfsliefhals efihsefl siae flasihef lsiahefl asijef lashiefl asihef lasihefl aishefsef',
            complaint_guide: 'asflihsf liahsf lasihef lsefh alsfh slefih alsiehf alsefh lasiheal isehflashef',
            status: 'behandling',
            groups: 'Gruppe B',
            sort_option: 'alfabetisk',
            deadline_answer: new Date(),
            deadline_comment: new Date(),
            deadline_conclude: new Date(),
            deadline_process: new Date(),
            deadline_review: new Date(),
            contact: 'Havemand Ismael Petersen',
            channels: 'facebook'
        }
    ]

}

export default {

    get: function(url) {
        
        // We pretend that we get a response for current reviews
        var response = db.reviews
        Store.commit('updateReviews', response)
        return response

    },
    getReview: function(id) {

        // We pretend that we get a response for a particular review
        var response = db.reviews.filter(review => review.sbsys_no === parseInt(id))
        return response
    },
    post: function(url, payload) {        

        // We pretend that we are uploading a review to database
        db.reviews.push(payload)
        return true
    }

}
