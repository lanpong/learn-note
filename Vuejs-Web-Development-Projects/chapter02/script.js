Vue.filter('date', time => moment(time).format('DD/MM/YY, HH:mm'))

new Vue({
    name: 'notebook',
    el: '#notebook',

    // data
    data () {
        return {
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            selectedId: localStorage.getItem('selected-id') || null,
        }
    },

    // 计算属性
    computed: {
        selectedNote() {
            return this.notes.find(note => note.id === this.selectedId)
        },

        notePreview () {
            return this.selectedNote ? marked(this.selectedNote.content) : ''
        },

        sortedNotes () {
            return this.notes.slice().sort((a, b) => a.created - b.created)
            .sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1)
        },

        linesCount () {
            if (this.selectedNote) {
                return this.selectedNote.content.split(/\r\n|\r\n/).length
            }
        },

        wordsCount () {
            if (this.selectedNote) {
                var s = this.selectedNote.content
                s = s.replace(/\n/g, ' ')
                s = s.replace(/(^\s*)|(\s*$)/gi, '')
                s = s.replace(/[ ]{2,}/, '')
                return s.split(' ').length
            }
        },

        charactersCount () {
            if (this.selectedNote) {
                return this.selectedNote.content.split('').length
            }
        },
    },

    // watch
    watch: {
        notes: {
            handler: 'saveNotes',
            deep: true,
        },

        selectedNote (val, oldVal) {
            localStorage.setItem('selected-id', val)
        },
    },

    methods: {
        addNote () {
            const time = Date.now()

            const note = {
                id: String(time),
                title: 'New note' + (this.notes.length + 1),
                content: 'this notebook is using markdown',
                created: time,
                favorite: false,
            }

            this.notes.push(note)
            this.selectNote(note)
        },

        removeNote () {
            if (this.selectedNote && confirm('delete the note?')) {
                const index = this.notes.indexOf(this.selectedNote)
                if (index !== -1) {
                    this.notes.splice(index, 1)
                }
            }
        },

        selectNote (note) {
            this.selectedId = note.id
        },

        savaNotes () {
            localStorage.setItem('notes', JSON.stringify(this.notes))
            console.log('notes saved', new Date())
        },

        favoriteNote () {
            this.selectedNote.favorite ^= true
        },
    },
})
