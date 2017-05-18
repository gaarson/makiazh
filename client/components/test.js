import React from 'react';

const Test = () => {
  return (
    <div className="col-sm-6">
      <div className="row">
        <div className="test-slider">
          <ol className="test">
            <h2 className="text-center">Tест определения типа кожи лица</h2>
            <li className="ask active">1. Бывает ли у Вас ощущение «стянутости» кожи?
              <ul>
                <li>
                  <input type="radio" name="ques1" value="" id="rad1" className="one" />
                  <label className="check" htmlFor="rad1"></label>
                  <label htmlFor="rad1">Никогда </label>
                </li>
                <li>
                  <input type="radio" name="ques1" value="" id="rad2" className="two" />
                  <label className="check" htmlFor="rad2"></label>
                  <label htmlFor="rad2">Иногда в области щек</label>
                </li>
                <li>
                  <input type="radio" name="ques1" value="" id="rad3" className="three" />
                  <label className="check" htmlFor="rad3"></label>
                  <label htmlFor="rad3">Время от времени</label>
                </li>
                <li>
                  <input type="radio" name="ques1" value="" id="rad4" className="htmlFor" />
                  <label className="check" htmlFor="rad4"></label>
                  <label htmlFor="rad4">Все время</label>
                </li>
              </ul>
            </li>

            <li className="ask">2. Шелушится ли Ваша кожа?
              <ul>
                <li>
                  <input type="radio" name="ques2" value="" id="rad5" className="one" />
                  <label className="check" htmlFor="rad5"></label>
                  <label htmlFor="rad5">Никогда </label>
                </li>
                <li>
                  <input type="radio" name="ques2" value="" id="rad6" className="two" />
                  <label className="check" htmlFor="rad6"></label>
                  <label htmlFor="rad6">Иногда в области щек</label>
                </li>
                <li>
                  <input type="radio" name="ques2" value="" id="rad7" className="three" />
                  <label className="check" htmlFor="rad7"></label>
                  <label htmlFor="rad7">Время от времени</label>
                </li>
                <li>
                  <input type="radio" name="ques2" value="" id="rad8" className="htmlFor" />
                  <label className="check" htmlFor="rad8"></label>
                  <label htmlFor="rad8">Все время</label>
                </li>
              </ul>
            </li>

            <li className="ask">3. Как часто у Вас появляются угри или прыщи на лице?
              <ul>
                <li>
                  <input type="radio" name="ques3" value="" id="rad9" className="one" />
                  <label className="check" htmlFor="rad9"></label>
                  <label htmlFor="rad9">Часто </label>
                </li>
                <li>
                  <input type="radio" name="ques3" value="" id="rad10" className="two" />
                  <label className="check" htmlFor="rad10"></label>
                  <label htmlFor="rad10">Зона области лоб-нос-подбородок </label>
                </li>
                <li>
                  <input type="radio" name="ques3" value="" id="rad11" className="three" />
                  <label className="check" htmlFor="rad11"></label>
                  <label htmlFor="rad11">Не очень часто </label>
                </li>
                <li>
                  <input type="radio" name="ques3" value="" id="rad12" className="htmlFor" />
                  <label className="check" htmlFor="rad12"></label>
                  <label htmlFor="rad12">Практически никогда</label>
                </li>
              </ul>
            </li>

            <li className="ask">4. Насколько явно выражены морщины?
              <ul>
                <li>
                  <input type="radio" name="ques4" value="" id="rad13" className="one" /> 
                  <label className="check" htmlFor="rad13"></label>
                  <label htmlFor="rad13">Почти нет </label>
                </li>
                <li>
                  <input type="radio" name="ques4" value="" id="rad14" className="two" />
                  <label className="check" htmlFor="rad14"></label>
                  <label htmlFor="rad14">Мимические морщины</label>
                </li>
                <li>
                  <input type="radio" name="ques4" value="" id="rad15" className="three" />
                  <label className="check" htmlFor="rad15"></label>
                  <label htmlFor="rad15">Видимые, но не явные</label>
                </li>
                <li>
                  <input type="radio" name="ques4" value="" id="rad16" className="htmlFor" />
                  <label className="check" htmlFor="rad16"></label>
                  <label htmlFor="rad16">Глубокие</label>
                </li>
              </ul>
            </li>

            <li className="ask">5. Насколько явно выражены поры?
              <ul>
                <li>
                  <input type="radio" name="ques5" value="" id="rad17" className="one" />
                  <label className="check" htmlFor="rad17"></label>
                  <label htmlFor="rad17">Очень явно </label>
                </li>
                <li>
                  <input type="radio" name="ques5" value="" id="rad18" className="two" />
                  <label className="check" htmlFor="rad18"></label>
                  <label htmlFor="rad18">В зоне области лоб-нос-подбородок </label>
                </li>
                <li>
                  <input type="radio" name="ques5" value="" id="rad19" className="three" />
                  <label className="check" htmlFor="rad19"></label>
                  <label htmlFor="rad19">Не очень явно </label>
                </li>
                <li>
                  <input type="radio" name="ques5" value="" id="rad20" className="htmlFor" />
                 <label className="check" htmlFor="rad20"></label>
                  <label htmlFor="rad20">Практически неразличимы </label>
                </li>
              </ul>
            </li>

            <li className="ask">6. Бывает ли кожа на лице жирной?
              <ul>
                <li>
                  <input type="radio" name="ques6" value="" id="rad21" className="one" />
                  <label className="check" htmlFor="rad21"></label>
                  <label htmlFor="rad21">Всегда  </label>
                </li>
                <li>
                  <input type="radio" name="ques6" value="" id="rad22" className="two" /> 
                  <label className="check" htmlFor="rad22"></label>
                  <label htmlFor="rad22">В зоне области лоб-нос-подбородок </label>
                </li>
                <li>
                  <input type="radio" name="ques6" value="" id="rad23" className="three" />
                  <label className="check" htmlFor="rad23"></label>
                  <label htmlFor="rad23">Иногда </label>
                </li>
                <li>
                  <input type="radio" name="ques6" value="" id="rad24" className="htmlFor" />
                  <label className="check" htmlFor="rad24"></label>
                  <label htmlFor="rad24">Практически никогда </label>
                </li>
              </ul>
            </li>
          </ol>
            <button type="button" name="button" id="button">Получить результат</button>
        <div className="result-test">
          <div id="dry" className="">
            <h3>Сухой тип</h3>
            <p>Наиболее часто подвержена различным шелушениям и раздражениям,
              очень чувствительная, и нежная сухая кожа. Бледно-розовый цвет,
               иногда с желтизной, сквозь тонкий слой эпидермиса, просвечиваются
               лицевые сосуды. Недостаток липидов отражается на иммунных свойствах,
               даже небольшие перепады температур вызывают покраснения на лице. Не
              редко чувство стянутости остается после умывания или снятия макияжа.
                Правильный уход за кожей поможет предотвратить появление морщин,
                преждевременного старения, дряблости - основных проблем сухого
                типа.</p>
                <a href="#">Ссылка на статью с данным типом лица</a>
          </div>
          <div id="normal" className="">
            <h3>Нормальный тип</h3>
            <p>Увлажненная, с идеальным ровным тоном, эластична - нормальная кожа
              лица. Благодаря сбалансированной работе сальных желез, шелушения и
              раздражения отсутствуют. Как не увидишь воспалений и закупоренных
              протоков в виде черных точек. Стоит определить тип кожи лица, чтобы
              сохранить в будущем гармоничное состояние, предотвратить появление
              морщин и обезвоживание.</p>
              <a href="#">Ссылка на статью с данным типом лица</a>
          </div>
          <div id="combo" className="">
            <h3>Комбинированный тип</h3>
            <p>Визуально правильно определить проще всего этот тип эпидермиса.
              Жирный блеск в области носа, подбородка, лба и контрастные сухие
              щеки и виски. Фактор окружающей среды не редко приводит к появлению
              комедонов и угрей в проблемных зонах. Комбинированная кожа нуждается
              в комплексном уходе, отдельно за каждой областью лица.</p>
              <a href="#">Ссылка на статью с данным типом лица</a>
          </div>
          <div id="fat" className="">
            <h3>Жирный тип</h3>
            <p>Тест для определения типа кожи стоит проходить по завершению
              гормональных изменений подросткового возраста. После этого периода,
              повышенную жирность, воспаления и угри можно относить к жирной коже.
              Недостаточная активность кровотока и чрезмерная секреция сальных желез
              приводит к пористой, бугристой структуре, с неравномерной пигментацией.
              Огромный плюс – ее замедленное старение, благодаря повышенному
              содержанию липидов. С помощью теста можно определить в домашних
              условиях этот тип и следуя совету по уходу, нормализовать
              состояние.</p>
              <a href="#">Ссылка на статью с данным типом лица</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Test;
