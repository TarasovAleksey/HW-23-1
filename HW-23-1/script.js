let group = {
    title: 'Java-56',
    students: ['Elena', 'Maria', 'Ekaterina', 'Olga'],
    showList: function() {
        console.log(`Group: ${this.title}`);
        console.log('Students:');
        this.students.forEach(student => {
            console.log(student);
        });
    }
};

group.showList();