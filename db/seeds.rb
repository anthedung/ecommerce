# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).


Product.create(
    [
        {title: 'Trứng Kinder', description: 'Quả thật bán trứng nhiều mới hiểu vì sao bé nào cũng mê mẩn cái món này đến thế. Scl thì đúng tiêu chuẩn Châu Âu ngon giã man, đồ chơi thì bé bé xinh xinh cơ mà xịn vô cùng. Mỗi món đồ chơi đc thiết kế rất tinh sảo, ví như con gà quay ngược lại sẽ là lừa, con ngựa Pony thì đẹp vô cùng, tóc dài như thật luôn......Nói túm lại, nó có sức cuốn hút thật kỳ diệu.
Cm mua nhiều sẽ đc bớt tí ti nha.', category: 'Bé', quantity: '100', price: '28000', image_url: 'https://www.dropbox.com/s/namthjhbinjmjcj/Trung.jpg?dl=0'},
        {title: 'Bột ăn dặm Kawa', description: '""Chị oi! E bắt đền c đấy, con em ăn bột Fucto nghiện rồi mà c lại hết. Em bắt đền c đấy....""Hí hí....
Bị khách bắt đền mà em vẫn thấy sướng cơ chứ. Bột lại về thêm phục vụ các con ak', category: 'Bé', quantity: '100', price: '', image_url: 'https://www.dropbox.com/s/irzihuyhssk0pvg/Kawa_andam.jpg?dl=0'},
        {title: 'Prospan', description: 'Sau những ngày cháy hàng, giờ em ý đã về rồi cả nhà ui Chính là siro Prospan đấy ak!!! Con cứ húng hắng ho là mẹ cứ tẩn ngay em nó là Ok ngay, ko phải dùng tới kháng sinh đâu ak
Liên hệ : Shop Bống Bi- 23 Núi Đôi
( Tầng 2 Áo cưới Bình Chúc)', category: 'Bé', quantity: '100', price: '', image_url: 'https://www.dropbox.com/s/2ann64v2q5hesds/prospan.jpg?dl=0'},
        {title: 'Nho Úc', description: 'Nhanh thế lại chuẩn bị đến rằm tháng riêng rùi!!! Em lại chuẩn bị về Nho Úc nhé cả nhà
Hom Trc khách đặt nguyên 1 thùng mà ngon quá trời. Vừa tươi lại vừa ngọt.
Xin mời các thượng đế đặt hàng nha!!!', category: '', quantity: '', price: '', image_url: 'https://www.dropbox.com/s/jnbhzflvjk82h09/nho_den.jpg?dl=0'}
    ])


Quote.create(
    [
        {author: 'Judy Garland', content: 'Always be a first-rate version of yourself, instead of a second-rate version of somebody else.', hashtags: 'confidence'},
        {author: 'Steve Jobs', content: 'Stay hungry. Stay foolish.', hashtags: 'motivation'},
        {author: 'Mahatma Gandhi', content: 'A man is but of product of his thought. What he thinks he becomes.', hashtags: 'life, motivation'},
        {author: 'William Saroyan', content: 'You can’t turn back the clock. But you can wind it up again', hashtags: 'life'},
        {author: 'Amelia Barr', content: 'Good people are good because they’ve come to wisdom through failure. We get very little wisdom from success', hashtags: 'wisdom'},
        {author: 'Mark Twain', content: 'It is always the simple that produces the marvelous.', hashtags: 'simplicity'},
        {author: 'Anne Frank', content: 'It is easier to fool people than to convince them that they have been fooled.', hashtags: 'fool'},
        {author: 'Jimmy Dean', content: 'Whoever is happy will make others happy too', hashtags: 'happy'},
        {author: 'Aristotle Onassis', content: 'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.', hashtags: 'motivation, life'},
        {author: 'Confucius', content: 'It is during our darkest moments that we must focus to see the light.', hashtags: 'inspiration'},
        {author: 'Nido Qubein', content: 'A man who has made a mistake and doesn’t correct it is making another mistake.', hashtags: 'mistake'},
        {author: 'Theodore Roosevelt', content: 'Your present circumstances don’t determine where you can go; they merely determine where you start.', hashtags: 'determine'},
        {author: 'Joseph Campbell', content: 'Believe you can and you’re halfway there.', hashtags: 'belief'},
        {author: 'John Muir', content: 'Find a place inside where there’s joy, and the joy will burn out the pain.', hashtags: 'joy, happy'},
        {author: 'Robert Louis Stevenson', content: 'The power of imagination makes us infinite.', hashtags: 'imagination'},
        {author: 'Warren Buffett', content: 'Judge each day not by the harvest you reap but by the seeds you plant.', hashtags: 'judge'},
        {author: 'Theodore Roosevelt', content: 'Someone’s sitting in the shade today because someone planted a tree a long time ago.', hashtags: 'life'},
        {author: 'Albert Einstein', content: 'With self-discipline most anything is possible.', hashtags: 'discipline'},
        {author: 'Abraham Lincoln', content: 'Creativity is knowing how to hide your sources.', hashtags: 'creativity'},
        {author: 'Aristotle', content: 'Whatever you are, be a good one.', hashtags: 'good'},
        {author: 'Sir Richard Branson', content: 'Knowing yourself is the beginning of all wisdom.', hashtags: 'wisdom'},
        {author: 'Sir Richard Branson', content: 'Entrepreneurship is a combination of passion, vision, creativity and a sense of adventure.', hashtags: 'entrepreneurship'},
    ]
)


YandexLanguage.create(
    [
        {code: 'sq', language: 'Albanian'},
        {code: 'en', language: 'English'},
        {code: 'ar', language: 'Arabic'},
        {code: 'hy', language: 'Armenian'},
        {code: 'az', language: 'Azerbaijan'},
        {code: 'af', language: 'Afrikaans'},
        {code: 'eu', language: 'Basque'},
        {code: 'be', language: 'Belarusian'},
        {code: 'bg', language: 'Bulgarian'},
        {code: 'bs', language: 'Bosnian'},
        {code: 'cy', language: 'Welsh'},
        {code: 'vi', language: 'Vietnamese'},
        {code: 'hu', language: 'Hungarian'},
        {code: 'ht', language: 'Haitian (Creole)'},
        {code: 'gl', language: 'Galician'},
        {code: 'nl', language: 'Dutch'},
        {code: 'el', language: 'Greek'},
        {code: 'ka', language: 'Georgian'},
        {code: 'da', language: 'Danish'},
        {code: 'he', language: 'Yiddish'},
        {code: 'id', language: 'Indonesian'},
        {code: 'ga', language: 'Irish'},
        {code: 'it', language: 'Italian'},
        {code: 'is', language: 'Icelandic'},
        {code: 'es', language: 'Spanish'},
        {code: 'kk', language: 'Kazakh'},
        {code: 'ca', language: 'Catalan'},
        {code: 'ky', language: 'Kyrgyz'},
        {code: 'zh', language: 'Chinese'},
        {code: 'ko', language: 'Korean'},
        {code: 'la', language: 'Latin'},
        {code: 'lv', language: 'Latvian'},
        {code: 'lt', language: 'Lithuanian'},
        {code: 'mg', language: 'Malagasy'},
        {code: 'ms', language: 'Malay'},
        {code: 'mt', language: 'Maltese'},
        {code: 'mk', language: 'Macedonian'},
        {code: 'mn', language: 'Mongolian'},
        {code: 'de', language: 'German'},
        {code: 'no', language: 'Norwegian'},
        {code: 'fa', language: 'Persian'},
        {code: 'pl', language: 'Polish'},
        {code: 'pt', language: 'Portuguese'},
        {code: 'ro', language: 'Romanian'},
        {code: 'ru', language: 'Russian'},
        {code: 'sr', language: 'Serbian'},
        {code: 'sk', language: 'Slovakian'},
        {code: 'sl', language: 'Slovenian'},
        {code: 'sw', language: 'Swahili'},
        {code: 'tg', language: 'Tajik'},
        {code: 'th', language: 'Thai'},
        {code: 'tl', language: 'Tagalog'},
        {code: 'tt', language: 'Tatar'},
        {code: 'tr', language: 'Turkish'},
        {code: 'uz', language: 'Uzbek'},
        {code: 'uk', language: 'Ukrainian'},
        {code: 'fi', language: 'Finish'},
        {code: 'fr', language: 'French'},
        {code: 'hr', language: 'Croatian'},
        {code: 'cs', language: 'Czech'},
        {code: 'sv', language: 'Swedish'},
        {code: 'et', language: 'Estonian'},
        {code: 'ja', language: 'Japanese'}
    ]
)