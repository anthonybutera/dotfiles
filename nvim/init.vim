"Use double quotes to comment lines out in .vimrc

" Vim-Plug                    " https://github.com/junegunn/vim-plug
"" call plug#begin('~/.vim/plugged')
call plug#begin('~/dotfiles/nvim/plugged')

" Scripts
  Plug 'junegunn/vim-plug'
  Plug 'scrooloose/nerdtree'
  Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
  Plug 'junegunn/fzf.vim'
  Plug 'itchyny/lightline.vim'

" Colorschemes
  Plug 'morhetz/gruvbox'                         " <leader>1
  Plug 'sjl/badwolf'                             " <leader>2
  Plug 'duckwork/nirvana'                        " <leader>3
  Plug 'nanotech/jellybeans.vim'                 " <leader>4
  Plug 'float168/vim-colors-cherryblossom'       " <leader>5
  Plug 'pcostasgr/red_alert_vim_theme'           " <leader>6 -- Must enable 'set termguicolors'

call plug#end()


" set leader key and color scheme
let g:mapleader = "\<Space>"
let g:maplocalleader = ','

syntax on                     " Enables syntax highlighing
" highlight Comment ctermfg=green
set autoindent                " Good auto indent
set autoread                  " Autoread
"set background=dark 
set clipboard=unnamedplus     " Copy paste between vim and everything else
set cmdheight=1               " More space for displaying messages
set complete+=kspell          " Shortcut for autocomplete
set cot=longest,menuone       " Sets completeopt option
" set cursorcolumn              " Enable highlighting of the current column
set cursorline                " Enable highlighting of the current line
set encoding=utf-8            " The encoding displayed 
set expandtab                 " Converts tabs to spaces
set fileencoding=utf-8        " The encoding written to file
set hidden                    " Required to keep multiple buffers open multiple buffers
set ignorecase
set incsearch
set iskeyword+=-              " treat dash separated words as a word text object"
set laststatus=2              " Always display the status line
set mouse=a                   " Enable your mouse
set nobackup                  " This is recommended by coc
" set nohlsearch                " Disables search highlighting
set noshowmode                " We don't need to see things like -- INSERT -- anymore
set noswapfile                " Same as nobackup
set nowritebackup             " This is recommended by coc
" set pumheight=10              " Makes popup menu smaller
set number relativenumber
set ruler
set scrolloff=5				  " Keeps 5 lines above or below the cursor visible while scrolling
set shiftwidth=2              " Change the number of space characters inserted for indentation
set showcmd
set showmatch
set sidescrolloff=5           " Keeps 5 lines left or right of the cursor visible while scrolling
set showtabline=4             " Always show tabs 
set smartcase
set smartindent               " Makes indenting smart
set smarttab                  " Makes tabbing smarter will realize you have 2 vs 4
set splitbelow                " Horizontal splits will automatically be below
set splitright                " Vertical splits will automatically be to the right
set tabstop=4                 " Insert 4 spaces for a tab
set t_Co=256                  " Support 256 colors
set termguicolors             " Sets TrueColor to ON
set timeoutlen=250            " By default timeoutlen is 1000 ms
set updatetime=50             " Faster completion
set wildmenu


" Keybindings
" ===========

" Moves cursor by line on screen instead of file  
nnoremap j gj
nnoremap k gk

" Page 1/2 Up 
nnoremap <S-j> <C-d>

" Page 1/2 Down 
nnoremap <S-k> <C-u>

" Page Down Full
nnoremap <C-j> <C-f>

" Page Up Full
nnoremap <C-k> <C-b>

" Use TAB for AutoComplete instead of <C-n>
inoremap <expr> <Tab> pumvisible() ? "\<C-n>" : "\<Tab>"

" Get rid of search result highlighting
nnoremap \\ :noh<CR>

" Miscellaneous
" =============

" Reload .vimrc source
nnoremap <leader>r :source $MYVIMRC<CR>
nnoremap <leader>ee :e $MYVIMRC<CR>

" Disable flow control
map <C-s> <Nop>

" Go to the beginning of the line
nnoremap gh 0

" Go to the end of the line
nnoremap gl $

" Copy to the end of the line, no whitespace
map Y y$

" Alternate way to writeout
nnoremap <leader>w :w<CR>

" Alternate way to save
nnoremap <leader>s :x<CR>

" Alternate way to quit
nnoremap <leader>q :q!<CR>

" Alternate way to split buffers
nnoremap <leader>sv :vnew<CR>
nnoremap <leader>sh :new<CR>
nnoremap <leader>ls :ls<CR>

" Escape real quick
inoremap jj <Esc>
inoremap <C-c> <Esc>

" Better window navigation
nnoremap <leader>h <C-w>h
nnoremap <leader>j <C-w>j
nnoremap <leader>k <C-w>k
nnoremap <leader>l <C-w>l

"NerdTreeToggle
map <leader>e :NERDTreeToggle / <CR>
let g:NERDTreeWinPos = "right"
let g:NERDTreeWinSize = "45"

" Fuzzy Finder
nnoremap <leader>f :Files ~<CR>
nnoremap <leader>b :Buffers<CR>


" Colorschemes (must be at the bottom of the .vimrc file)
" ============

let g:lightline = { 'colorscheme': 'powerline', }
let g:gruvbox_contrast_dark = 'hard'

if $USER == 'root'
  :colorscheme red_alert
else
  :colorscheme jellybeans
endif

" https://github.com/morhetz/gruvbox
nnoremap <leader>1 :colorscheme gruvbox<CR>                  

" https://github.com/sjl/badwolf
nnoremap <leader>2 :colorscheme badwolf<CR>                  

" https://github.com/duckwork/nirvana
nnoremap <leader>3 :colorscheme nirvana<CR>                

" https://github.com/lmintmate/blue-mood-vim
nnoremap <leader>4 :colorscheme jellybeans<CR>         

" https://github.com/float168/vim-colors-cherryblossom
nnoremap <leader>5 :colorscheme cherryblossom<CR>            

" https://github.com/pcostasgr/red_alert_vim_theme
nnoremap <leader>6 :colorscheme red_alert<CR>                



