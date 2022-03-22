import { franc, francAll } from 'franc'
import langs from 'langs'

const languageText = process.argv[2]

let languageIdentifier = franc(languageText)
console.log(langs.where('3', languageIdentifier))