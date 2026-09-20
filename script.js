const principles = [
    {id:"confirmation-bias", cat:"cognitive", tag:"تحيز معرفي", title:"تحيز التأكيد",
     desc:"ميل العقل للبحث عن المعلومات التي تؤكد ما يعتقده مسبقًا، وتجاهل ما يخالفها.",
     situ:"تقرأ فقط الأخبار التي تتفق مع رأيك السياسي وتتجاهل الأخرى.",
     extended:"هذا التحيز يجعلنا نشعر بثقة زائدة تجاه معتقداتنا لأننا لا نتعرض إلا للأدلة المؤيدة لها، بينما تُهمَّش الأدلة المعاكسة أو تُفسَّر بشكل يقلل من أهميتها.",
     tip:"قبل اتخاذ قرار مهم، ابحث عمدًا عن رأي يعارض وجهة نظرك واقرأه بجدية."},
    {id:"ikea-effect", cat:"cognitive", tag:"تحيز معرفي", title:"تأثير آيكيا",
     desc:"نميل لتقدير الأشياء التي بذلنا جهدًا في صنعها أكثر من قيمتها الفعلية.",
     situ:"تشعر أن الأثاث الذي ركّبته بنفسك أجمل من المُصنّع جاهزًا.",
     extended:"سُمي هذا التحيز نسبة لشركة أثاث تُباع منتجاتها غير مجمّعة؛ فالجهد المبذول في التجميع يخلق رابطة عاطفية تزيد من القيمة المُدركة للشيء بغض النظر عن جودته الفعلية.",
     tip:"عند تقييم عمل بذلت فيه جهدًا، اسأل نفسك: هل سأراه بهذه القيمة لو صنعه شخص آخر؟"},
    {id:"sunk-cost", cat:"cognitive", tag:"تحيز معرفي", title:"مغالطة التكلفة الغارقة",
     desc:"الاستمرار في قرار خاسر فقط لأننا استثمرنا فيه وقتًا أو مالًا سابقًا.",
     situ:"تكمل مشاهدة فيلم مملّ لأنك دفعت ثمن التذكرة بالفعل.",
     extended:"المنطق السليم يقول إن القرارات يجب أن تُبنى على المستقبل لا على الماضي، لكن الخسارة المؤلمة للجهد أو المال السابق تدفعنا للاستمرار في مسار خاسر لتبرير ذلك الاستثمار.",
     tip:"اسأل نفسك: لو كنت أبدأ الآن من الصفر، هل كنت سأختار الاستمرار في هذا؟"},
    {id:"availability-bias", cat:"cognitive", tag:"تحيز معرفي", title:"تحيز التوفر",
     desc:"الحكم على احتمالية وقوع شيء بناءً على سهولة تذكّر أمثلة عليه، لا باحتماله الفعلي.",
     situ:"تخاف من السفر بالطائرة بعد خبر عن حادثة تحطم، رغم أن السيارة أخطر إحصائيًا.",
     extended:"الأحداث النادرة لكن المثيرة، كحوادث الطائرات، تحظى بتغطية إعلامية كبيرة تجعلها أسهل تذكرًا من أحداث أكثر شيوعًا لكنها أقل إثارة، فيختل تقديرنا للمخاطر الحقيقية.",
     tip:"قبل الحكم على خطورة أمر ما، ابحث عن إحصائية فعلية بدل الاعتماد على أول مثال يخطر ببالك."},
    {id:"overconfidence-bias", cat:"cognitive", tag:"تحيز معرفي", title:"تحيز الإفراط في الثقة",
     desc:"المبالغة في تقدير دقة معرفتنا أو قدرتنا على إنجاز شيء ما.",
     situ:"تقدّر أن مشروعك سينتهي خلال أسبوع، فيستغرق شهرًا كاملًا.",
     extended:"كلما زادت خبرتنا السطحية بموضوع ما، زادت ثقتنا الزائدة بقدرتنا على التنبؤ أو الإنجاز فيه، وهو ما يفسر تكرار تجاوز المشاريع للجدول الزمني المتوقع لها.",
     tip:"أضف هامش أمان زمنيًا وماليًا لأي تقدير تضعه، فالواقع غالبًا أبطأ من الخطة."},

    {id:"bystander-effect", cat:"behavior", tag:"سلوك", title:"تأثير المتفرج",
     desc:"كلما زاد عدد الحاضرين في موقف طارئ، قلّ احتمال تدخل أي شخص للمساعدة.",
     situ:"حادث في شارع مزدحم، والجميع ينتظر أن يتصرف شخص آخر.",
     extended:"كل شخص في الحشد يفترض أن غيره سيتدخل، فتتوزع المسؤولية الأخلاقية على الجميع حتى تكاد تختفي، وهذا ما يفسر حالات عدم التدخل رغم كثرة الشهود.",
     tip:"إذا احتجت مساعدة في موقف عام، وجّه طلبك لشخص محدد بالإشارة إليه مباشرة بدل النداء العام."},
    {id:"social-conformity", cat:"behavior", tag:"سلوك", title:"الامتثال الاجتماعي",
     desc:"الميل لتغيير رأينا أو سلوكنا لمجرد توافقه مع الجماعة المحيطة بنا.",
     situ:"توافق على رأي في اجتماع عمل رغم اختلافك معه داخليًا.",
     extended:"الرغبة في الانتماء والتوافق مع الجماعة قوية جدًا لدرجة أن أشخاصًا يغيّرون إجاباتهم الصحيحة أحيانًا فقط لتتوافق مع رأي الأغلبية الخاطئ أمامهم.",
     tip:"قبل أن توافق على رأي جماعي، اسأل نفسك بصمت: هل كنت لأصل لهذا الرأي وحدي؟"},
    {id:"halo-effect", cat:"behavior", tag:"سلوك", title:"تأثير الهالة",
     desc:"انطباع إيجابي واحد، كالمظهر، يجعلنا نفترض صفات إيجابية أخرى لدى الشخص دون دليل.",
     situ:"تثق بنصيحة شخص أنيق الملبس أكثر من غيره رغم تساوي خبرتهما.",
     extended:"صفة إيجابية بارزة واحدة، كالجاذبية أو حسن الحديث، «تُلوّن» انطباعنا الكلي عن الشخص فنفترض به كفاءة أو صدقًا أكبر مما تدعمه الأدلة الفعلية.",
     tip:"افصل تقييمك لمهارة الشخص عن انطباعك عن شخصيته أو مظهره، وقيّم كل جانب على حدة."},
    {id:"groupthink", cat:"behavior", tag:"سلوك", title:"التفكير الجماعي",
     desc:"ميل أعضاء المجموعة لتفضيل الانسجام على النقد، فتُتخذ قرارات ضعيفة تجنبًا للخلاف.",
     situ:"يوافق فريق العمل على خطة يعرف الجميع بضعفها تجنبًا لإحراج المدير.",
     extended:"الرغبة في الحفاظ على انسجام المجموعة تجعل الأعضاء يتجنبون طرح مخاوف أو بدائل، حتى لو كانوا يشعرون داخليًا أن القرار الجماعي خاطئ.",
     tip:"عيّن شخصًا في كل اجتماع مهم دوره أن يلعب محامي الشيطان ويطرح الاعتراضات عمدًا."},
    {id:"reciprocity", cat:"behavior", tag:"سلوك", title:"مبدأ المعاملة بالمثل",
     desc:"الميل لرد الجميل لمن قدّمه لنا، حتى لو كان بسيطًا أو غير مطلوب أصلًا.",
     situ:"تشتري من بائع قدّم لك عينة مجانية رغم أنك لم تكن تنوي الشراء.",
     extended:"الشعور بـ«الدَّين» الاجتماعي بعد تلقي معروف، ولو بسيطًا، يدفعنا لرد الجميل حتى لو تجاوز حجم ردنا حجم المعروف الأصلي بكثير.",
     tip:"عندما تتلقى هدية أو معروفًا غير متوقع من بائع، امنح نفسك وقتًا قبل اتخاذ قرار الشراء."},

    {id:"harlow-experiment", cat:"experiment", tag:"تجربة نفسية", title:"تجربة القرد والسلك",
     desc:"أظهرت تجربة هارلو أن القرود الصغيرة تفضّل الراحة والدفء على الطعام وحده، مبرزةً أهمية الحنان في النمو.",
     situ:"طفل يفضّل حضن أحد والديه حتى وهو غير جائع.",
     extended:"استخدم هارلو دميتين: واحدة سلكية توفر الطعام، وأخرى قماشية دافئة بلا طعام؛ فضّلت القرود الصغيرة الدمية القماشية معظم الوقت، مما أظهر أن الراحة العاطفية حاجة أساسية لا ثانوية.",
     tip:"تذكّر أن الحضور العاطفي والدفء أحيانًا أهم من تقديم الحلول العملية لمن تحب."},
    {id:"stanford-prison", cat:"experiment", tag:"تجربة نفسية", title:"تجربة السجن الوهمي",
     desc:"وضع أشخاص عاديين في أدوار سجّان وسجين كشف كيف تُشكّل السلطة سلوك الإنسان بسرعة.",
     situ:"موظف جديد يتبنى سلوكيات متسلطة بمجرد ترقيته لمنصب إشرافي.",
     extended:"أُوقفت التجربة قبل انتهائها لأن «الحراس» بدؤوا يتصرفون بقسوة حقيقية تجاه «السجناء»، رغم أن الجميع طلاب متطوعون يعرفون أن الأمر تمثيلي بالكامل.",
     tip:"عند تولّي أي منصب سلطة، راقب نفسك بوعي من التغيرات المفاجئة في طريقة معاملتك للآخرين."},
    {id:"milgram-experiment", cat:"experiment", tag:"تجربة نفسية", title:"تجربة ميلجرام",
     desc:"أظهرت أن أغلب الناس مستعدون لإيذاء آخرين إذا طلبت منهم سلطة موثوقة ذلك، حتى ضد ضمائرهم.",
     situ:"موظف ينفّذ قرارًا يعرف أنه خاطئ لأن مديره طلب ذلك.",
     extended:"طُلب من المشاركين توجيه صدمات كهربائية وهمية متزايدة لشخص آخر كلما أخطأ، وبمجرد وجود شخص بمعطف أبيض يطلب الاستمرار، أطاع أغلبهم رغم صراخ «الضحية» المسجّل مسبقًا.",
     tip:"امتلك جملة جاهزة لرفض تعليمات تخالف قيمك، حتى لو جاءت من شخص ذي سلطة."},
    {id:"marshmallow-test", cat:"experiment", tag:"تجربة نفسية", title:"تجربة المارشميلو",
     desc:"قياس قدرة الأطفال على تأجيل المتعة الفورية كمؤشر على ضبط النفس في المستقبل.",
     situ:"تؤجل مشاهدة حلقة جديدة لتنهي عملك أولًا، فتشعر برضا أكبر لاحقًا.",
     extended:"قُدّمت قطعة حلوى للطفل مع وعد بقطعة ثانية إن انتظر بضع دقائق دون أكلها؛ الأطفال الذين انتظروا أظهرت متابعات لاحقة ارتباطهم بنتائج أكاديمية وحياتية أفضل، رغم الجدل حول تفسير هذا الترابط.",
     tip:"درّب نفسك على تأجيل المكافآت الصغيرة الفورية بوضع خطوة بسيطة بينك وبين الإغراء."},
    {id:"invisible-gorilla", cat:"experiment", tag:"تجربة نفسية", title:"تجربة الغوريلا الخفية",
     desc:"أظهرت أن التركيز الشديد على مهمة يجعلنا نغفل عن أحداث واضحة تمامًا أمام أعيننا.",
     situ:"تنظر إلى هاتفك أثناء المشي فلا تلاحظ تغيّرًا واضحًا في الشارع.",
     extended:"طُلب من المشاركين عدّ تمريرات الكرة في فيديو، فلم يلاحظ نصفهم تقريبًا شخصًا يرتدي زي غوريلا يمشي وسط اللاعبين ويضرب صدره، رغم وضوحه التام.",
     tip:"لا تثق كليًا بأنك «كنت ستلاحظ» لو حدث شيء غريب أمامك وأنت مركّز في مهمة أخرى."},

    {id:"parkinsons-law", cat:"tool", tag:"أداة تفكير", title:"قانون باركنسون",
     desc:"العمل يتمدد ليملأ الوقت المخصص له، مهما كانت المهمة بسيطة.",
     situ:"مهمة تستغرق ساعة، لكنك خصصت لها يومًا كاملًا فاستغرقت يومًا كاملًا.",
     extended:"صاغ سيريل باركنسون هذه الملاحظة أصلًا عن البيروقراطية الحكومية، لكنها تنطبق على أي مهمة شخصية: كلما وسّعت الجدول الزمني، وجد العقل تفاصيل إضافية «يجب» إنجازها لملء الوقت.",
     tip:"ضع مواعيد نهائية أقصر من شعورك الطبيعي بالراحة، وستنجز المهمة غالبًا في الوقت المحدد."},
    {id:"pareto-principle", cat:"tool", tag:"أداة تفكير", title:"مبدأ باريتو 80/20",
     desc:"غالبًا ٢٠٪ من الجهد ينتج ٨٠٪ من النتائج، وتحديد هذا الجزء يوفر وقتًا كبيرًا.",
     situ:"تكتشف أن أربع مهام فقط من قائمتك الطويلة هي ما يحرك مشروعك فعليًا.",
     extended:"لاحظ الاقتصادي فيلفريدو باريتو أن ٨٠٪ من الأراضي في إيطاليا كانت مملوكة لـ٢٠٪ من السكان، وتَكرر هذا النمط لاحقًا في مجالات كثيرة من المبيعات إلى الإنتاجية الشخصية.",
     tip:"راجع قائمة مهامك أسبوعيًا واسأل: ما هي المهام القليلة التي تحرك معظم النتائج؟ ركّز عليها أولًا."},
    {id:"eisenhower-matrix", cat:"tool", tag:"أداة تفكير", title:"مصفوفة أيزنهاور",
     desc:"تصنيف المهام حسب أهميتها وعاجليتها لتحديد ما يُنجز أولًا وما يُؤجل أو يُفوَّض.",
     situ:"ترتب مهام يومك بين عاجل ومهم، ومهم لكن غير عاجل، فتتوقف عن الغرق في التفاصيل.",
     extended:"تُقسّم المصفوفة المهام إلى أربع خانات: عاجل ومهم (نفّذه الآن)، مهم وغير عاجل (خطط له)، عاجل وغير مهم (فوّضه)، وغير عاجل وغير مهم (احذفه).",
     tip:"قبل إضافة أي مهمة جديدة لقائمتك، صنّفها فورًا في إحدى الخانات الأربع بدل تركها بلا أولوية."},
    {id:"pomodoro-technique", cat:"tool", tag:"أداة تفكير", title:"تقنية بومودورو",
     desc:"العمل على دفعات مركزة مدتها ٢٥ دقيقة تتخللها فترات راحة قصيرة، لتحسين التركيز ومقاومة التسويف.",
     situ:"تنجز تقريرًا كنت تؤجله منذ أسبوع خلال أربع جلسات فقط.",
     extended:"سُميت التقنية نسبة إلى مؤقت مطبخ على شكل طماطم استخدمه مخترعها فرانشيسكو تشيريلو، وتعتمد فكرتها على أن التركيز الكامل قصير المدى مع راحات منتظمة أكثر إنتاجية من ساعات عمل متواصلة ومشتتة.",
     tip:"جرّب أربع جلسات من ٢٥ دقيقة عمل متواصل يليها ٥ دقائق راحة، مع راحة أطول بعد الجلسة الرابعة."},
    {id:"occams-razor", cat:"tool", tag:"أداة تفكير", title:"نصل أوكام",
     desc:"عند وجود تفسيرين لظاهرة ما، التفسير الأبسط الذي يحتاج افتراضات أقل غالبًا ما يكون الأقرب للصواب.",
     situ:"تسمع صوت طرق غريب فتفترض أنه من الرياح لا من شيء خارق.",
     extended:"لا يعني المبدأ أن التفسير الأبسط صحيح دائمًا، بل أنه يستحق الاختبار أولًا قبل اللجوء لتفسيرات أكثر تعقيدًا تحتاج افتراضات إضافية غير مؤكدة.",
     tip:"عند مواجهة مشكلة تقنية أو يومية، تحقق من الاحتمال الأبسط والأكثر شيوعًا قبل افتراض سبب نادر ومعقد."},

    {id:"moon-illusion", cat:"illusion", tag:"وهم إدراكي", title:"وهم القمر",
     desc:"يبدو القمر عند الأفق أكبر بكثير مما هو عليه عند منتصف السماء، رغم أن حجمه الفعلي لا يتغير.",
     situ:"تلتقط صورة للقمر الكبير عند الأفق فتخرج الصورة أصغر مما توقعت.",
     extended:"لا يوجد إجماع علمي كامل على سبب هذا الوهم، لكن التفسير الأكثر قبولًا أن الدماغ يقارن حجم القمر بالمعالم الأرضية القريبة من الأفق كالأشجار والمباني، فيبدو أكبر مقارنة بها.",
     tip:"جرّب النظر للقمر رأسًا على عقب أو من بين ساقيك المنحنيتين، وستلاحظ أن الوهم يختفي فجأة."},
    {id:"muller-lyer-illusion", cat:"illusion", tag:"وهم إدراكي", title:"وهم مولر-لاير",
     desc:"خطان متساويان في الطول يبدو أحدهما أطول بسبب اتجاه الأسهم المرسومة على طرفيهما.",
     situ:"تصميم واجهة يجعل عنصرًا يبدو أكبر من آخر رغم تساوي حجمهما الفعلي.",
     extended:"اكتُشف هذا الوهم عام ١٨٨٩، ويُستخدم كثيرًا في أبحاث علم النفس الإدراكي لأنه يظهر باستمرار حتى بعد معرفة الشخص أن الخطين متساويان فعليًا.",
     tip:"في التصميم البصري، انتبه لكيفية تأثير العناصر المحيطة على إدراك حجم أو أهمية العنصر الرئيسي."},
    {id:"ebbinghaus-illusion", cat:"illusion", tag:"وهم إدراكي", title:"وهم إبنغهاوس",
     desc:"الدائرة نفسها تبدو أكبر أو أصغر حسب حجم الدوائر المحيطة بها.",
     situ:"تشعر أن راتبك جيد بين زملاء أقل دخلًا، وقليل بين أصدقاء أعلى دخلًا رغم أنه لم يتغير.",
     extended:"يُعرف هذا الوهم أيضًا بـ«دائرة تيتشنر»، ويُستخدم أحيانًا لدراسة كيف يختلف تأثير السياق البصري على الأطفال مقارنة بالبالغين.",
     tip:"تذكّر أن تقييمك لإنجازك الشخصي يتأثر بمن تقارن نفسك به، فاختر مرجع المقارنة بوعي."},
    {id:"mcgurk-effect", cat:"illusion", tag:"وهم إدراكي", title:"تأثير ماكغورك",
     desc:"ما تسمعه فعليًا قد يتغير حسب حركة الشفاه التي تراها، فالعين تخدع الأذن أحيانًا.",
     situ:"تفهم كلمة مختلفة في مكالمة فيديو رديئة المزامنة عمّا تفهمه في مكالمة صوتية للمتحدث نفسه.",
     extended:"عند تشغيل صوت مقطع «با» مع فيديو لشفاه تلفظ «فا»، يسمع أغلب الناس صوتًا مختلفًا تمامًا عن الاثنين، مما يثبت أن الإدراك السمعي عملية دماغية تدمج حواسًا متعددة لا سمعًا خالصًا.",
     tip:"في المكالمات المرئية ضعيفة الجودة، لا تتفاجأ إن بدا فهمك للكلام أضعف من مكالمة صوتية عادية."},
    {id:"phi-phenomenon", cat:"illusion", tag:"وهم إدراكي", title:"ظاهرة الحركة الظاهرية",
     desc:"عرض صور ثابتة متتالية بسرعة كافية يجعل الدماغ يفسّرها كحركة متصلة.",
     situ:"تشاهد فيلمًا كرتونيًا وتنسى أنه في الأصل رسومات ثابتة متعاقبة لا صورة متحركة فعليًا.",
     extended:"هذه الظاهرة هي الأساس العلمي لصناعة السينما والرسوم المتحركة بالكامل؛ فبعد نحو ١٦ صورة في الثانية، يعجز الدماغ عن تمييز الفواصل بين الصور فيدمجها كحركة سلسة.",
     tip:"لا شيء يتحرك فعليًا في الشاشة أمامك، والتذكير بهذا مفيد أحيانًا لتقدير مدى قابلية إدراكنا للخداع."},

    {id:"paradox-of-choice", cat:"paradox", tag:"مفارقة", title:"مفارقة الاختيار",
     desc:"زيادة عدد الخيارات المتاحة قد تُصعّب اتخاذ القرار وتقلل الرضا عنه لاحقًا، بدل أن تُسهّله.",
     situ:"تقضي نصف ساعة أمام رف به ٣٠ نوع مربى دون أن تشتري شيئًا.",
     extended:"صاغ عالم النفس باري شوارتز هذا المصطلح، مبينًا أن كثرة الخيارات ترفع سقف التوقعات وتزيد الشعور بالندم المحتمل، حتى لو كان الخيار المُتخذ جيدًا فعلًا.",
     tip:"حدد لنفسك سلفًا عدد الخيارات التي ستقارن بينها (مثلًا ثلاثة فقط) قبل اتخاذ القرار."},
    {id:"hedonic-treadmill", cat:"paradox", tag:"مفارقة", title:"مفارقة الرفاهية",
     desc:"كلما توفرت وسائل الراحة أكثر، ازداد شعورنا بضيق الوقت بدلًا من أن يقل.",
     situ:"تملك غسالة وسيارة وهاتفًا ذكيًا، ومع ذلك تشعر أن يومك أضيق من يوم جدك.",
     extended:"كل تحسّن في وسائل الراحة يرفع سقف توقعاتنا بسرعة حتى يصبح «طبيعيًا» لا استثنائيًا، فتعود مستويات الرضا إلى ما كانت عليه تقريبًا رغم تحسّن الظروف الموضوعية.",
     tip:"مارس الامتنان الواعي بتذكّر دوري لوسائل الراحة التي اعتدت عليها ونسيت أنها كانت يومًا رفاهية."},
    {id:"simpsons-paradox", cat:"paradox", tag:"مفارقة", title:"مفارقة سيمبسون",
     desc:"اتجاه إحصائي يظهر في مجموعات منفصلة قد ينعكس أو يختفي عند دمج هذه المجموعات معًا.",
     situ:"علاج يبدو أفضل في كل فئة عمرية على حدة، لكنه يبدو أسوأ عند النظر إلى النتيجة الكلية.",
     extended:"غالبًا ما ينشأ هذا الانعكاس الإحصائي بسبب متغير خفي غير موزّع بالتساوي بين المجموعات، وتجاهله يؤدي لاستنتاجات مضللة تمامًا رغم صحة الأرقام ظاهريًا.",
     tip:"عند قراءة إحصائية مجمّعة، اسأل دائمًا: هل تتغير النتيجة لو نظرت للمجموعات الفرعية كل على حدة؟"},
    {id:"abilene-paradox", cat:"paradox", tag:"مفارقة", title:"مفارقة أبيلين",
     desc:"تتفق مجموعة على قرار لا يريده أي فرد فيها فعليًا، ظنًا من كل عضو أن البقية متحمسون له.",
     situ:"يوافق الجميع في العائلة على رحلة مرهقة لا يريدها أحد، تجنبًا لخيبة أمل الآخرين.",
     extended:"سُميت نسبة لقصة عائلة قادت مسافة طويلة في حر شديد لتناول الغداء في مدينة أبيلين رغم أن لا أحد فيها أراد الذهاب فعلًا، وكل فرد ظن أنه وحده غير متحمس.",
     tip:"في اجتماعات القرار الجماعي، اسأل صراحة: هل هناك من يفضّل خيارًا مختلفًا لكنه لم يبده بعد؟"},
    {id:"busyness-paradox", cat:"paradox", tag:"مفارقة", title:"مفارقة الانشغال",
     desc:"الشعور بضيق الوقت يزداد كلما توفرت أدوات لتوفيره، فنملأ الوقت الموفَّر بمهام جديدة بدل الراحة.",
     situ:"يوفر لك تطبيق وقتًا في التسوق، فتقضيه في تصفح مهام عمل إضافية بدل الاستراحة.",
     extended:"التقنيات التي وُعدنا بأنها «ستوفر لنا وقتًا»، كالهاتف الذكي وتطبيقات التوصيل، غالبًا ما تُستبدل مساحتها الزمنية بمهام ومطالب جديدة بدل أن تتحول فعليًا إلى راحة أو وقت فراغ.",
     tip:"عند توفير وقت بفضل أداة جديدة، خصص هذا الوقت بوعي للراحة قبل أن يمتلئ تلقائيًا بمهمة أخرى."}
  ];

  const catLabels = {
    all:"الكل", cognitive:"تحيزات معرفية", behavior:"سلوكيات", experiment:"تجارب نفسية",
    tool:"أدوات تفكير", illusion:"أوهام", paradox:"مفارقات"
  };

  const grid = document.getElementById('cardGrid');
  const countLabel = document.getElementById('countLabel');

  function arabicCount(n){
    return n + (n === 1 ? ' مبدأ' : n === 2 ? ' مبدآن' : n <= 10 ? ' مبادئ' : ' مبدأ');
  }

  const topicIcons = {
    cognitive: '<svg class="topic-icon icon-cognitive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.6V16h5.6v-.6c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    behavior: '<svg class="topic-icon icon-behavior" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="1.5"/><path d="M3 20c0-3 2.2-5 5-5s5 2 5 5M14 20c0-2.2 1.6-4 3.5-4s3.5 1.6 3.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    experiment: '<svg class="topic-icon icon-experiment" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3h6M10 3v6.2L5.5 18a1.8 1.8 0 0 0 1.6 2.6h9.8a1.8 1.8 0 0 0 1.6-2.6L14 9.2V3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 15h8" stroke="currentColor" stroke-width="1.5"/></svg>',
    tool: '<svg class="topic-icon icon-tool" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 3v2.2M12 18.8V21M4.9 6.6l1.6 1.6M17.5 15.8l1.6 1.6M3 12h2.2M18.8 12H21M4.9 17.4l1.6-1.6M17.5 8.2l1.6-1.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    illusion: '<svg class="topic-icon icon-illusion" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.5"/></svg>',
    paradox: '<svg class="topic-icon icon-paradox" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15a4 4 0 1 1 0-8c2.8 0 4.4 2 5 4 .6 2 2.2 4 5 4a4 4 0 1 0 0-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
  };

  function renderGrid(cat){
    grid.innerHTML = '';
    let shown = 0;
    principles.forEach(p => {
      if(cat !== 'all' && p.cat !== cat) return;
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = (shown * 0.045) + 's';
      shown++;
      card.innerHTML = `
        <div class="icon-wrap">
          <span class="tag">${p.tag}</span>
          ${topicIcons[p.cat] || ''}
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="situ"><b>في الحياة:</b> ${p.situ}</div>
        <div class="readmore">اقرأ التفاصيل ←</div>
      `;
      card.addEventListener('click', () => { location.hash = '#/p/' + p.id; });
      grid.appendChild(card);
    });
    countLabel.textContent = arabicCount(shown);
    document.querySelectorAll('#catNav button').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
  }

  function renderDetail(id){
    const idx = principles.findIndex(p => p.id === id);
    if(idx === -1){ location.hash = '#/'; return; }
    const p = principles[idx];
    document.getElementById('detailCard').innerHTML = `
      <span class="tag">${p.tag}</span>
      <h1>${p.title}</h1>
      <div class="detail-block"><h4>الفكرة باختصار</h4><p>${p.desc}</p></div>
      <div class="detail-block"><h4>شرح أعمق</h4><p>${p.extended}</p></div>
      <div class="detail-block"><h4>في الحياة</h4><p>${p.situ}</p></div>
      <div class="detail-block tip-box"><h4>نصيحة عملية</h4><p>${p.tip}</p></div>
    `;
    document.title = p.title + ' — مِدرَك';
    const prev = principles[(idx - 1 + principles.length) % principles.length];
    const next = principles[(idx + 1) % principles.length];
    document.getElementById('prevBtn').onclick = () => { location.hash = '#/p/' + prev.id; };
    document.getElementById('nextBtn').onclick = () => { location.hash = '#/p/' + next.id; };
  }

  /* ---------- founder view (owner-only editing) ---------- */
  // NOTE: this is a static, backend-less site, so this is a light client-side
  // gate (a shared passcode), not real authentication — anyone who reads the
  // page source can find it. It only stops casual visitors from editing.
  const OWNER_PASSCODE = "Ali-Midrak-2026";

  const founderName = document.getElementById('founderName');
  const founderRole = document.getElementById('founderRole');
  const founderBio = document.getElementById('founderBio');
  const founderAvatar = document.getElementById('founderAvatar');
  const founderEditBtn = document.getElementById('founderEditBtn');
  const ownerLoginBtn = document.getElementById('ownerLoginBtn');
  let founderEditing = false;

  function isOwner(){
    try{ return sessionStorage.getItem('midrak_owner_auth') === 'true'; }
    catch(e){ return false; }
  }

  function loadFounder(){
    try{
      const raw = localStorage.getItem('midrak_founder');
      if(raw){
        const data = JSON.parse(raw);
        if(data.name) founderName.textContent = data.name;
        if(data.role) founderRole.textContent = data.role;
        if(data.bio) founderBio.textContent = data.bio;
      }
    }catch(e){ /* localStorage unavailable, keep placeholders */ }
    founderAvatar.textContent = (founderName.textContent || 'م').trim().charAt(0);
    refreshOwnerUI();
  }

  function refreshOwnerUI(){
    if(isOwner()){
      founderEditBtn.classList.remove('hidden');
      ownerLoginBtn.classList.add('hidden');
    } else {
      founderEditBtn.classList.add('hidden');
      ownerLoginBtn.classList.remove('hidden');
      founderEditBtn.textContent = 'تعديل الملف الشخصي';
      founderEditing = false;
      [founderName, founderRole, founderBio].forEach(el => el.setAttribute('contenteditable', 'false'));
    }
  }

  function ownerLogin(){
    const input = window.prompt('أدخل كلمة مرور المالك للتعديل:');
    if(input === null) return;
    if(input === OWNER_PASSCODE){
      try{ sessionStorage.setItem('midrak_owner_auth', 'true'); }catch(e){ /* ignore */ }
      refreshOwnerUI();
    } else {
      window.alert('كلمة المرور غير صحيحة.');
    }
  }

  function toggleFounderEdit(){
    if(!isOwner()) return;
    founderEditing = !founderEditing;
    [founderName, founderRole, founderBio].forEach(el => el.setAttribute('contenteditable', founderEditing));
    if(founderEditing){
      founderEditBtn.textContent = 'حفظ التغييرات';
      founderName.focus();
    } else {
      founderEditBtn.textContent = 'تعديل الملف الشخصي';
      const data = {
        name: founderName.textContent.trim(),
        role: founderRole.textContent.trim(),
        bio: founderBio.textContent.trim()
      };
      try{ localStorage.setItem('midrak_founder', JSON.stringify(data)); }catch(e){ /* ignore */ }
      founderAvatar.textContent = (data.name || 'م').charAt(0);
    }
  }
  founderEditBtn.addEventListener('click', toggleFounderEdit);
  ownerLoginBtn.addEventListener('click', ownerLogin);

  /* ---------- router ---------- */
  const views = {
    home: document.getElementById('view-home'),
    about: document.getElementById('view-about'),
    detail: document.getElementById('view-detail'),
    founder: document.getElementById('view-founder')
  };

  function parseHash(){
    const h = location.hash || '#/';
    if(h.indexOf('#/p/') === 0) return {view:'detail', id: decodeURIComponent(h.slice(4))};
    if(h === '#/about') return {view:'about'};
    if(h === '#/founder') return {view:'founder'};
    if(h.indexOf('#/cat/') === 0) return {view:'home', cat: decodeURIComponent(h.slice(6))};
    return {view:'home', cat:'all'};
  }

  function setActiveNav(routeName){
    document.querySelectorAll('#mainNav a').forEach(a => {
      a.classList.toggle('active', a.dataset.route === routeName);
    });
  }

  function router(){
    const r = parseHash();
    Object.values(views).forEach(v => v.classList.add('hidden'));
    if(r.view === 'home'){
      views.home.classList.remove('hidden');
      views.home.classList.remove('fade-route'); void views.home.offsetWidth; views.home.classList.add('fade-route');
      document.title = 'مِدرَك — وعي بالمعرفة، قرارات أفضل';
      renderGrid(r.cat || 'all');
      setActiveNav('home');
    } else if(r.view === 'about'){
      views.about.classList.remove('hidden');
      views.about.classList.remove('fade-route'); void views.about.offsetWidth; views.about.classList.add('fade-route');
      document.title = 'عن الموقع — مِدرَك';
      setActiveNav('about');
    } else if(r.view === 'detail'){
      views.detail.classList.remove('hidden');
      views.detail.classList.remove('fade-route'); void views.detail.offsetWidth; views.detail.classList.add('fade-route');
      renderDetail(r.id);
      setActiveNav('');
    } else if(r.view === 'founder'){
      views.founder.classList.remove('hidden');
      views.founder.classList.remove('fade-route'); void views.founder.offsetWidth; views.founder.classList.add('fade-route');
      document.title = 'المؤسس — مِدرَك';
      loadFounder();
      setActiveNav('founder');
    }
    window.scrollTo(0,0);
  }

  document.getElementById('catNav').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    location.hash = btn.dataset.cat === 'all' ? '#/' : '#/cat/' + btn.dataset.cat;
  });

  document.getElementById('backBtn').addEventListener('click', () => { location.hash = '#/'; });

  window.addEventListener('hashchange', router);
  router();
