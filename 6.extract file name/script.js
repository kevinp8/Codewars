class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.slice(dirtyFileName.indexOf('_')+1,dirtyFileName.lastIndexOf('.') )
    }
}